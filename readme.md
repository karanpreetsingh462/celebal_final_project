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
    `usage` VARCHAR(1000),
    safety_precautions VARCHAR(1000),
    manufacturer_id BIGINT,
    CONSTRAINT fk_manufacturer
        FOREIGN KEY (manufacturer_id)
        REFERENCES manufacturer(id)
        ON DELETE SET NULL
);
```

---

## ⚙️ Spring Boot Configuration

### 3. Update Database Credentials

Open the `application.properties` file in your Spring Boot project (typically located at `src/main/resources/application.properties`) and update your database credentials accordingly:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/pharma_db
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```

> 💡 **Tip:** Replace `YOUR_USERNAME` and `YOUR_PASSWORD` with your actual MySQL credentials.

---

## ✅ Ready to Use

Once you've set up the database and updated your credentials, start your Spring Boot application. It should connect to the database and be ready to perform CRUD operations on `product` and `manufacturer` tables.

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