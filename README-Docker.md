# Docker Setup for Celebal Pharma Application

This document provides instructions for running the Celebal Pharma application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose installed on your system

## Quick Start

### Option 1: Using the provided scripts

**For Windows:**
```bash
run-docker.bat
```

**For Linux/Mac:**
```bash
chmod +x run-docker.sh
./run-docker.sh
```

### Option 2: Manual commands

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd celebal-pharma
   ```

2. **Build and run all services**:
   ```bash
   docker-compose up --build
   ```

3. **Access the application**:
   - Frontend: http://localhost
   - Backend API: http://localhost:8080
   - MySQL Database: localhost:3306

## Individual Service Commands

### Build and run only the backend:
```bash
cd backend
docker build -t pharma-backend .
docker run -p 8080:8080 --name pharma-backend pharma-backend
```

### Build and run only the frontend:
```bash
cd frontend
docker build -t pharma-frontend .
docker run -p 80:80 --name pharma-frontend pharma-frontend
```

## Docker Compose Commands

### Start all services:
```bash
docker-compose up
```

### Start services in background:
```bash
docker-compose up -d
```

### Stop all services:
```bash
docker-compose down
```

### Stop and remove volumes:
```bash
docker-compose down -v
```

### View logs:
```bash
# All services
docker-compose logs

# Specific service
docker-compose logs backend
docker-compose logs frontend
docker-compose logs mysql
```

### Rebuild and restart:
```bash
docker-compose up --build --force-recreate
```

## Service Details

### Backend (Spring Boot)
- **Port**: 8080
- **Database**: MySQL 8.0
- **Java Version**: 17
- **Framework**: Spring Boot 3.5.0

### Frontend (React)
- **Port**: 80
- **Framework**: React 19.1.0
- **Build Tool**: Vite
- **UI**: Tailwind CSS + Shadcn/ui

### Database (MySQL)
- **Port**: 3306
- **Database**: pharma_db
- **Root Password**: 5ypq49gs@kA

## Environment Variables

The application uses the following environment variables (configured in docker-compose.yml):

### Backend:
- `SPRING_DATASOURCE_URL`: jdbc:mysql://mysql:3306/pharma_db
- `SPRING_DATASOURCE_USERNAME`: root
- `SPRING_DATASOURCE_PASSWORD`: 5ypq49gs@kA
- `SPRING_JPA_HIBERNATE_DDL_AUTO`: update
- `SPRING_JPA_SHOW_SQL`: true
- `SERVER_PORT`: 8080

### MySQL:
- `MYSQL_ROOT_PASSWORD`: 5ypq49gs@kA
- `MYSQL_DATABASE`: pharma_db
- `MYSQL_USER`: pharma_user
- `MYSQL_PASSWORD`: pharma_password

## Configuration Files

### For Docker (default):
- `backend/src/main/resources/application.properties` - Uses `mysql:3306`

### For Local Development:
- `backend/src/main/resources/application-local.properties` - Uses `localhost:3306`

To run locally with Docker database:
```bash
# Start only MySQL
docker-compose up mysql

# Run backend locally with local profile
cd backend
./mvnw spring-boot:run -Dspring.profiles.active=local
```

## Troubleshooting

### Common Issues:

1. **Database Connection Error**:
   ```
   Communications link failure
   Connection refused
   ```
   **Solution**: 
   - Ensure you're using the Docker setup (not running backend locally)
   - Check if MySQL container is running: `docker-compose ps`
   - Verify database URL in application.properties uses `mysql:3306` (not `localhost:3306`)

2. **Port already in use**:
   - Change ports in docker-compose.yml
   - Stop existing services using those ports

3. **Database connection issues**:
   - Ensure MySQL container is running: `docker-compose ps`
   - Check logs: `docker-compose logs mysql`
   - Wait for MySQL to be fully ready (health check passes)

4. **Build failures**:
   - Clean Docker cache: `docker system prune -a`
   - Rebuild: `docker-compose up --build --force-recreate`

5. **Frontend not connecting to backend**:
   - Ensure backend is running: `docker-compose logs backend`
   - Check if API calls are pointing to correct URL

6. **Health check failures**:
   - Backend health check may fail initially - this is normal
   - Wait for all services to be healthy: `docker-compose ps`

### Useful Commands:

```bash
# Check running containers
docker ps

# Check container logs
docker logs <container-name>

# Enter container shell
docker exec -it <container-name> /bin/bash

# Remove all containers and images
docker system prune -a

# Check Docker disk usage
docker system df

# Check service health
docker-compose ps

# View real-time logs
docker-compose logs -f
```

## Development

For development, you can run services individually:

1. **Backend only**:
   ```bash
   docker-compose up mysql backend
   ```

2. **Frontend only** (with local backend):
   ```bash
   docker-compose up frontend
   ```

3. **Local development with Docker database**:
   ```bash
   # Start MySQL
   docker-compose up mysql
   
   # Run backend locally
   cd backend
   ./mvnw spring-boot:run -Dspring.profiles.active=local
   ```

## Production Deployment

For production deployment, consider:

1. Using environment-specific docker-compose files
2. Setting up proper secrets management
3. Configuring reverse proxy (nginx)
4. Setting up SSL certificates
5. Implementing health checks
6. Using Docker Swarm or Kubernetes for orchestration

## Important Notes

- **Database URL**: The application.properties file is configured for Docker (uses `mysql:3306`). For local development, use the `application-local.properties` file.
- **Health Checks**: Services have health checks to ensure proper startup order.
- **Networking**: All services are on the same Docker network for communication.
- **Volumes**: MySQL data is persisted in a Docker volume. 