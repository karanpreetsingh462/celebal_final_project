# 🌿 Celebal Pharma - Full Stack Application

## 🌐 Live Demo  
🔗 **Deployed Project**: [Celebal Pharma on Azure](https://black-grass-036d21300.1.azurestaticapps.net)

---

## 📽️ Deployment Videos  
- ▶️ [Local Deployment Demo](https://drive.google.com/file/d/1Or5hgL0e_1JmfV364kpYkPl0V3NN3r-3/view?usp=sharing)   
- ☁️ [Azure Deployment Demo](https://drive.google.com/file/d/1au00saTpq8-R0ryxpku7w9PTj5dwWbh6/view?usp=sharing) 

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
git clone https://github.com/karanpreetsingh462/celebal_final_project.git
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
# or
mvn spring-boot:run
```

### 2️⃣.a Local MySQL Database Setup & Sample Data

If you are using MySQL locally, run the following queries to set up and seed your database:

```sql
CREATE DATABASE pharma_db;
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

INSERT INTO manufacturer (name, location) VALUES
('PharmaCorp Industries', 'New York, USA'),
('MediTech Solutions', 'London, UK'),
('BioHealth Pharmaceuticals', 'Tokyo, Japan'),
('GlobalMed Inc.', 'Berlin, Germany'),
('LifeScience Labs', 'Mumbai, India'),
('Advanced Therapeutics', 'Toronto, Canada'),
('Wellness Pharma', 'Sydney, Australia'),
('InnovateMed Corp', 'Zurich, Switzerland'),
('Premier Biologics', 'São Paulo, Brazil'),
('NextGen Pharmaceuticals', 'Seoul, South Korea'),
('Atlantic Drug Company', 'Dublin, Ireland'),
('Continental Pharma', 'Paris, France'),
('Apex Medical Solutions', 'Singapore'),
('Nordic Pharmaceuticals', 'Stockholm, Sweden'),
('Sunrise Healthcare', 'Tel Aviv, Israel');

INSERT INTO product (name, description, instructions, safety_precautions, manufacturer_id) VALUES
('Cardimax', 'ACE inhibitor for hypertension management', 'Take once daily with or without food for blood pressure control', 'Monitor kidney function regularly. Avoid during pregnancy. May cause dry cough in some patients.', 1),
('Diabenil', 'Metformin-based diabetes medication', 'Take twice daily with meals to control blood sugar levels', 'Monitor for lactic acidosis. Discontinue before surgery. May cause gastrointestinal upset.', 2),
('Respiron', 'Bronchodilator for asthma and COPD', 'Inhale 2 puffs every 4-6 hours as needed for breathing difficulties', 'Rinse mouth after use. Monitor heart rate. Seek immediate help if breathing worsens.', 3),
('Mentaflex', 'Antidepressant for major depressive disorder', 'Take once daily in the morning with food', 'Monitor for suicidal thoughts especially in young adults. Avoid alcohol. Gradual discontinuation recommended.', 4),
('Painkiller Pro', 'Non-steroidal anti-inflammatory drug', 'Take 1-2 tablets every 8 hours with food for pain and inflammation', 'Avoid if allergic to aspirin. May increase bleeding risk. Monitor for stomach ulcers.', 5),
('Immunex', 'Immunosuppressant for autoimmune conditions', 'Take as prescribed by physician, usually once daily', 'Regular blood monitoring required. Avoid live vaccines. Increased infection risk.', 6),
('Sleepwell', 'Sleep aid for insomnia', 'Take 30 minutes before bedtime on empty stomach', 'May cause drowsiness next day. Avoid alcohol. Risk of dependency with long-term use.', 7),
('Gastrocare', 'Proton pump inhibitor for acid reflux', 'Take once daily before breakfast for stomach acid reduction', 'Long-term use may affect bone density. Monitor magnesium levels. Take with water.', 8),
('Thyrobalance', 'Levothyroxine for hypothyroidism', 'Take once daily on empty stomach, wait 1 hour before eating', 'Regular thyroid function monitoring required. Interactions with calcium and iron supplements.', 9),
('Cholestoff', 'Statin for cholesterol management', 'Take once daily in the evening with or without food', 'Monitor liver function and muscle pain. Avoid grapefruit juice. May interact with other medications.', 10),
('Antivirex', 'Antiviral medication for influenza', 'Take twice daily for 5 days, start within 48 hours of symptom onset', 'May cause nausea and vomiting. Complete full course even if feeling better.', 11),
('Jointease', 'Topical cream for arthritis pain', 'Apply thin layer to affected joints 3-4 times daily', 'Wash hands after application. Avoid contact with eyes. Discontinue if skin irritation occurs.', 12),
('Hemostop', 'Anticoagulant for blood clot prevention', 'Take once daily at same time each day with food', 'Regular blood clotting tests required. Increased bleeding risk. Avoid contact sports.', 13),
('Neurofix', 'Anticonvulsant for epilepsy', 'Take twice daily with food, maintain consistent timing', 'Do not stop suddenly. Monitor for mood changes. May cause drowsiness initially.', 14),
('Bonecalc', 'Calcium supplement with Vitamin D', 'Take 2 tablets daily with meals for bone health', 'May cause constipation. Separate from iron supplements by 2 hours. Maintain adequate hydration.', 15);
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

## 🗃️ Database Setup

* Use **Azure SQL Database** in production
* Access with Azure Query Editor, SSMS, or Azure Data Studio

#### Example Queries

If you are using Azure SQL Database or Microsoft SQL Server, use the following script:

```sql
-- Create the database
CREATE DATABASE pharma_db;
GO

USE pharma_db;
GO

-- Manufacturer table
CREATE TABLE manufacturer (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    location NVARCHAR(255)
);
GO

-- Product table
CREATE TABLE product (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    description NVARCHAR(1000),
    instructions NVARCHAR(1000),
    safety_precautions NVARCHAR(1000),
    manufacturer_id BIGINT NULL,
    CONSTRAINT fk_manufacturer
        FOREIGN KEY (manufacturer_id)
        REFERENCES manufacturer(id)
        ON DELETE SET NULL
);
GO

-- Insert manufacturers
INSERT INTO manufacturer (name, location) VALUES
(N'PharmaCorp Industries', N'New York, USA'),
(N'MediTech Solutions', N'London, UK'),
(N'BioHealth Pharmaceuticals', N'Tokyo, Japan'),
(N'GlobalMed Inc.', N'Berlin, Germany'),
(N'LifeScience Labs', N'Mumbai, India'),
(N'Advanced Therapeutics', N'Toronto, Canada'),
(N'Wellness Pharma', N'Sydney, Australia'),
(N'InnovateMed Corp', N'Zurich, Switzerland'),
(N'Premier Biologics', N'São Paulo, Brazil'),
(N'NextGen Pharmaceuticals', N'Seoul, South Korea'),
(N'Atlantic Drug Company', N'Dublin, Ireland'),
(N'Continental Pharma', N'Paris, France'),
(N'Apex Medical Solutions', N'Singapore'),
(N'Nordic Pharmaceuticals', N'Stockholm, Sweden'),
(N'Sunrise Healthcare', N'Tel Aviv, Israel');
GO

-- Insert products
INSERT INTO product (name, description, instructions, safety_precautions, manufacturer_id) VALUES
(N'Cardimax', N'ACE inhibitor for hypertension management', N'Take once daily with or without food for blood pressure control', N'Monitor kidney function regularly. Avoid during pregnancy. May cause dry cough in some patients.', 1),
(N'Diabenil', N'Metformin-based diabetes medication', N'Take twice daily with meals to control blood sugar levels', N'Monitor for lactic acidosis. Discontinue before surgery. May cause gastrointestinal upset.', 2),
(N'Respiron', N'Bronchodilator for asthma and COPD', N'Inhale 2 puffs every 4-6 hours as needed for breathing difficulties', N'Rinse mouth after use. Monitor heart rate. Seek immediate help if breathing worsens.', 3),
(N'Mentaflex', N'Antidepressant for major depressive disorder', N'Take once daily in the morning with food', N'Monitor for suicidal thoughts especially in young adults. Avoid alcohol. Gradual discontinuation recommended.', 4),
(N'Painkiller Pro', N'Non-steroidal anti-inflammatory drug', N'Take 1-2 tablets every 8 hours with food for pain and inflammation', N'Avoid if allergic to aspirin. May increase bleeding risk. Monitor for stomach ulcers.', 5),
(N'Immunex', N'Immunosuppressant for autoimmune conditions', N'Take as prescribed by physician, usually once daily', N'Regular blood monitoring required. Avoid live vaccines. Increased infection risk.', 6),
(N'Sleepwell', N'Sleep aid for insomnia', N'Take 30 minutes before bedtime on empty stomach', N'May cause drowsiness next day. Avoid alcohol. Risk of dependency with long-term use.', 7),
(N'Gastrocare', N'Proton pump inhibitor for acid reflux', N'Take once daily before breakfast for stomach acid reduction', N'Long-term use may affect bone density. Monitor magnesium levels. Take with water.', 8),
(N'Thyrobalance', N'Levothyroxine for hypothyroidism', N'Take once daily on empty stomach, wait 1 hour before eating', N'Regular thyroid function monitoring required. Interactions with calcium and iron supplements.', 9),
(N'Cholestoff', N'Statin for cholesterol management', N'Take once daily in the evening with or without food', N'Monitor liver function and muscle pain. Avoid grapefruit juice. May interact with other medications.', 10),
(N'Antivirex', N'Antiviral medication for influenza', N'Take twice daily for 5 days, start within 48 hours of symptom onset', N'May cause nausea and vomiting. Complete full course even if feeling better.', 11),
(N'Jointease', N'Topical cream for arthritis pain', N'Apply thin layer to affected joints 3-4 times daily', N'Wash hands after application. Avoid contact with eyes. Discontinue if skin irritation occurs.', 12),
(N'Hemostop', N'Anticoagulant for blood clot prevention', N'Take once daily at same time each day with food', N'Regular blood clotting tests required. Increased bleeding risk. Avoid contact sports.', 13),
(N'Neurofix', N'Anticonvulsant for epilepsy', N'Take twice daily with food, maintain consistent timing', N'Do not stop suddenly. Monitor for mood changes. May cause drowsiness initially.', 14),
(N'Bonecalc', N'Calcium supplement with Vitamin D', N'Take 2 tablets daily with meals for bone health', N'May cause constipation. Separate from iron supplements by 2 hours. Maintain adequate hydration.', 15),
(N'Eyecare Plus', N'Eye drops for glaucoma', N'Instill 1 drop in affected eye twice daily', N'Remove contact lenses before use. May cause temporary blurred vision. Store in refrigerator.', 1),
(N'Skinhealth', N'Topical antibiotic for skin infections', N'Apply thin layer to affected area twice daily for 7-10 days', N'Clean area before application. Complete full course. Discontinue if severe irritation occurs.', 2),
(N'Breatheasy', N'Nasal spray for allergic rhinitis', N'Spray once in each nostril daily during allergy season', N'Prime before first use. May cause nasal irritation. Avoid spraying into eyes.', 3),
(N'Moodlift', N'Anxiolytic for anxiety disorders', N'Take 1-2 tablets three times daily as needed', N'May cause drowsiness. Avoid alcohol. Risk of dependency. Do not drive if affected.', 4),
(N'Digestaid', N'Enzyme supplement for digestive issues', N'Take 1-2 capsules with each meal', N'Swallow whole, do not crush. May cause mild stomach upset initially.', 5),
(N'Herbaflex', N'Herbal supplement for joint mobility', N'Take 3 capsules daily with water, preferably with meals', N'Consult doctor if taking blood thinners. May take 4-6 weeks to see full benefits.', 6),
(N'Vitaboost', N'Multivitamin and mineral supplement', N'Take one tablet daily with breakfast', N'May cause stomach upset if taken on empty stomach. Iron content may cause constipation.', 7),
(N'Coldaway', N'Decongestant for cold symptoms', N'Take 1 tablet every 12 hours, do not exceed 2 tablets in 24 hours', N'May cause insomnia if taken late in day. Avoid if you have high blood pressure.', 8),
(N'Heartguard', N'Beta-blocker for heart conditions', N'Take once daily at same time, with or without food', N'Do not stop suddenly. Monitor blood pressure regularly. May mask signs of low blood sugar.', 9),
(N'Liverclean', N'Hepatoprotective supplement', N'Take 2 capsules twice daily before meals', N'Consult doctor if you have liver disease. May interact with certain medications.', 10),
(N'Kidneycare', N'Supplement for kidney health support', N'Take 1 capsule twice daily with plenty of water', N'Maintain adequate hydration. Consult doctor if you have kidney disease.', 11),
(N'Memorymax', N'Cognitive enhancement supplement', N'Take 2 capsules daily with morning meal', N'May take several weeks to notice effects. Consult doctor if taking blood thinners.', 12),
(N'Stressaway', N'Adaptogenic herb supplement for stress', N'Take 1-2 capsules daily, preferably in morning', N'May cause drowsiness in some individuals. Start with lower dose.', 13),
(N'Energyplus', N'B-vitamin complex for energy support', N'Take 1 tablet daily with breakfast', N'May cause bright yellow urine (harmless). Take with food to prevent stomach upset.', 14),
(N'Detoxmax', N'Liver detox supplement', N'Take 3 capsules daily for 30 days, then 1 capsule daily for maintenance', N'Drink plenty of water. May cause mild digestive upset initially.', 15),
(N'Flexijoint', N'Glucosamine and chondroitin for joint health', N'Take 3 capsules daily with meals', N'May take 2-3 months for full benefits. Consult doctor if allergic to shellfish.', 1),
(N'Probiotic Pro', N'Multi-strain probiotic supplement', N'Take 1 capsule daily on empty stomach or as directed', N'Refrigerate after opening. May cause mild bloating initially.', 2),
(N'Calciummax', N'High-potency calcium with magnesium', N'Take 2 tablets daily, preferably with meals', N'May cause constipation. Take with plenty of water. Separate from iron supplements.', 3),
(N'Omega3 Supreme', N'Fish oil supplement for heart health', N'Take 2 softgels daily with meals', N'May cause fishy aftertaste. Consult doctor if taking blood thinners.', 4),
(N'Antioxidant Complex', N'Mixed antioxidant supplement', N'Take 2 capsules daily with food', N'May interact with certain medications. Consult healthcare provider before use.', 5),
(N'Immune Boost', N'Vitamin C and zinc for immune support', N'Take 1 tablet daily, preferably with food', N'High doses may cause stomach upset. Reduce dose if digestive issues occur.', 6),
(N'Hair Growth Formula', N'Biotin and keratin supplement for hair health', N'Take 2 capsules daily with water', N'May take 3-6 months to see results. Consult doctor if pregnant or nursing.', 7),
(N'Sleep Natural', N'Melatonin supplement for sleep support', N'Take 1 tablet 30 minutes before bedtime', N'Start with lowest dose. May cause drowsiness. Avoid driving after taking.', 8),
(N'Muscle Recovery', N'Protein and amino acid supplement', N'Mix 1 scoop with water or milk, take after workout', N'May cause digestive upset if lactose intolerant. Maintain adequate hydration.', 9),
(N'Brain Focus', N'Nootropic supplement for cognitive function', N'Take 2 capsules daily with breakfast', N'May cause mild headache initially. Reduce caffeine intake when starting.', 10),
(N'Cardio Support', N'Coenzyme Q10 for heart health', N'Take 1 capsule daily with fatty meal for better absorption', N'May interact with blood thinners. Consult doctor before use.', 11),
(N'Lung Health', N'Herbal formula for respiratory support', N'Take 2 capsules twice daily with water', N'May cause mild throat irritation. Discontinue if allergic reaction occurs.', 12),
(N'Diabetes Support', N'Chromium and alpha-lipoic acid supplement', N'Take 1 capsule twice daily before meals', N'Monitor blood sugar levels closely. Consult doctor before use with diabetes medications.', 13),
(N'Thyroid Support', N'Iodine and tyrosine supplement', N'Take 1 capsule daily on empty stomach', N'Do not exceed recommended dose. Consult doctor if you have thyroid conditions.', 14),
(N'Adrenal Support', N'Adaptogenic herbs for adrenal health', N'Take 2 capsules daily with morning meal', N'May cause restlessness if taken late in day. Start with 1 capsule daily.', 15),
(N'Women''s Health', N'Iron and folic acid supplement for women', N'Take 1 tablet daily with vitamin C for better absorption', N'May cause constipation or stomach upset. Take with food if needed.', 1),
(N'Men''s Vitality', N'Zinc and saw palmetto supplement for men', N'Take 2 capsules daily with meals', N'May take 2-3 months for full benefits. Consult doctor if taking medications.', 2),
(N'Senior Formula', N'Comprehensive vitamin for adults 50+', N'Take 1 tablet daily with breakfast', N'Contains iron which may cause constipation. Increase fiber intake if needed.', 3),
(N'Kids Gummy Vitamins', N'Chewable multivitamin for children', N'Children 2-3 years: 1 gummy daily. Children 4+: 2 gummies daily', N'Keep out of reach of children. Do not exceed recommended dose. Brush teeth after taking.', 4),
(N'Prenatal Complete', N'Comprehensive prenatal vitamin', N'Take 1 tablet daily with food, preferably with breakfast', N'May cause nausea. Take with food and plenty of water. Consult doctor before use.', 5);
GO
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
