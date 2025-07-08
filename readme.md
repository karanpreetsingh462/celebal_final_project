# Pharma Product Management System

This project is a backend service for managing pharmaceutical products and their manufacturers. It uses **Spring Boot** for the backend and **MySQL** as the relational database.

---

## 🛠️ Database Setup

### 1. Create the Database

Log into your MySQL server and run the following SQL command to create the database:

```sql
CREATE DATABASE pharma_db;
```

### 2. Create the Tables

Once inside the `pharma_db` database, execute the following SQL statements to initialize the schema:

```sql
USE pharma_db;

CREATE TABLE manufacturer (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255)
);

CREATE TABLE product (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(1000),
    instructions VARCHAR(1000),
    safety_precautions VARCHAR(1000),
    manufacturer_id BIGINT,
    CONSTRAINT fk_manufacturer
        FOREIGN KEY (manufacturer_id)
        REFERENCES manufacturer(id)
        ON DELETE SET NULL
);
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

## 🗃️ Database Setup

* Use **Azure SQL Database** in production
* Access with Azure Query Editor, SSMS, or Azure Data Studio

#### Example Queries

```sql
SELECT * FROM dbo.product;
SELECT * FROM dbo.manufacturer;
```

---

## 🛠️ Troubleshooting

| Issue                            | Solution                                     |
| -------------------------------- | -------------------------------------------- |
| **Frontend: No products found**  | Verify `VITE_API_BASE_URL` and CORS          |
| **Backend: DB connection fails** | Check credentials, firewall settings         |
| **CI/CD pipeline fails**         | Validate GitHub Secrets, check logs          |
| **Product Add/Edit issues**      | Confirm correct API URLs & redeploy frontend |

---

## 📊 Monitoring & Logging

* **Backend Logs:** Azure App Service → Log Stream
* **Advanced Monitoring:** Enable Azure Application Insights

---

## 📁 Project Structure

```
├── src
│   ├── main
│   │   ├── java/com/yourapp/...
│   │   └── resources/
│   │       └── application.properties
├── pom.xml
└── README.md
```

---