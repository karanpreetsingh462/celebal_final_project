# 🌿 Celebal Pharma - Full Stack Application

## 🌐 Live Demo  
🔗 **Deployed Project**: [Celebal Pharma on Azure](https://black-grass-036d21300.1.azurestaticapps.net)

---

## 📽️ Deployment Videos  
- ▶️ [Local Deployment Demo](#) *(replace with your actual video link)*  
- ☁️ [Azure Deployment Demo](#) *(replace with your actual video link)*

---

## 📋 Overview  
Celebal Pharma is a full-stack web application for managing pharmaceutical products, built with a **Spring Boot backend**, **React frontend**, and **Azure SQL Database**.  
It is fully containerized and supports **CI/CD** via **GitHub Actions**, with production deployment on **Microsoft Azure**.

---

## 🚀 Features  
- 🧪 Product listing, add/edit/delete  
- 🏭 Manufacturer management  
- 🔐 Secure backend with **Java 17 & Spring Boot**  
- 🎨 Modern frontend using **React (Vite) & Tailwind CSS**  
- ☁️ Azure SQL Database integration  
- 🔄 CI/CD with GitHub Actions  
- 🚀 Deployed to **Azure App Service** and **Azure Static Web Apps**

---

## 🧰 Prerequisites  
- Java 17+  
- Node.js 18+  
- Maven 3.8+  
- Docker (for local builds)  
- Azure account (for deployment)

---

## 💻 Local Development

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd celebal-pharma
```

### 2️⃣ Backend Setup

* Configure local DB (MySQL or SQL Server)
* Update:
  `backend/src/main/resources/application-local.properties`
* Run backend:

```bash
cd backend
./mvnw spring-boot:run -Dspring-boot.run.profiles=local
```

### 3️⃣ Frontend Setup

* Create `.env` in `frontend/`:

```env
VITE_API_BASE_URL=http://localhost:8080
```

* Start frontend:

```bash
cd frontend
npm install
npm run dev
```

---

## ☁️ Production Deployment (Azure)

### 🔧 Azure Resources

* **Backend:** Azure App Service (Java 17 or Docker)
* **Frontend:** Azure Static Web Apps
* **Database:** Azure SQL Database

### 🔑 Environment Variables

**In Azure App Service:**

* `DB_PASSWORD`

**In Azure Static Web Apps (if needed):**

* `VITE_API_BASE_URL=https://<your-backend-app>.azurewebsites.net`

### 🛠️ CI/CD with GitHub Actions

* Configs: `.github/workflows/`
* Required GitHub Secrets:

  * `AZURE_CREDENTIALS`
  * `AZURE_WEBAPP_PUBLISH_PROFILE`
  * `GHCR_TOKEN` (for Docker)
  * `DB_PASSWORD`

### 🚀 Deployment Workflow

* Push to `main` triggers build & deploy:

  * **Frontend:** Azure Static Web Apps
  * **Backend:** Azure App Service

---

## ✅ Ready to Use

Once you've set up the database and updated your credentials, start your Spring Boot application. It should connect to the database and be ready to perform CRUD operations on product and manufacturer tables.

---

## 📊 Monitoring & Logging

* **Backend Logs:** Azure App Service → Log Stream
* **Advanced Monitoring:** Enable Azure Application Insights

---

## 📚 Useful Resources

* [Azure App Service Docs](https://learn.microsoft.com/en-us/azure/app-service/)
* [Azure Static Web Apps Docs](https://learn.microsoft.com/en-us/azure/static-web-apps/)
* [Spring Boot Docs](https://spring.io/projects/spring-boot)
* [Vite Docs](https://vitejs.dev/)

---

## 🤝 Contact

For issues or contributions, feel free to open a GitHub issue or pull request.
