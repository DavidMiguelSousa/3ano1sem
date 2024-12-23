# UC008 - Create a new Patient profile

## 1. Requirements Engineering

### 1.1. Use Case Description

> As an Admin, I want to create a new patient profile, so that I can register their personal details and medical history.

---

### 1.2. Customer Specifications and Clarifications

**From the specifications document:**

//Preencher

**From the client clarifications:**

> **Question:** Is it mandatory for patients to have a user account to schedule a surgery?
> 
> **Answer:** No, patients are not required to have a user account. The system administrator creates patient profiles.

> **Question:** Can a user have both patient and healthcare staff profiles?
> 
> **Answer:** No, a user cannot have both profiles. Staff and patients have separate identifications.

> **Question:** How are duplicate patient profiles handled when registered by both the patient and admin?
> 
> **Answer:** The system checks the email for uniqueness. The admin must first create the patient record, and then the patient can register using the same email.

> **Question:** So, when the administrator starts creating the patient profile, what format(s) of the date of birth will they need to enter? Furthermore, what will be the format of the Medical Record Number generated after recording the data?
> 
> **Answer:** From a usability perspective, dates should be presented to the user using the operating system's locale definitions. since for this sprint you are building an API, you should use a standard format like ISO 8601.
Medical record numbers are generated by the system following the format YYYYMMnnnnnn where YYYY and MM are the year and month of the registration and nnnnnn is a sequential number

> **Question:** Can you give an example of a Patient's medical record?
> 
> **Answer:** Patient Medical Record
Patient Information
Name	John Doe
Date of Birth	April 5, 1985 (Age: 39)
Gender	Male
Phone	+1-555-1234
Address	123 Elm Street, Springfield, IL
Email	johndoe@email.com
**Medical History**
Allergies: Penicillin
Chronic Conditions: Hypertension (diagnosed 2015), Type 2 Diabetes (diagnosed 2020)
Previous Surgeries:
Appendectomy (2010)
Knee Arthroscopy (2018)
Family History:
Father: Hypertension
Mother: Type 2 Diabetes
Smoking Status: Former smoker (quit 2015)
**Current Medications**
Metformin 500mg, twice daily (for Diabetes)
Lisinopril 10mg, once daily (for Hypertension)
Atorvastatin 20mg, once daily (for Cholesterol)
**Recent Visits & Diagnoses**
Date of Visit: October 1, 2024
Reason for Visit: Routine check-up, monitoring of diabetes and hypertension
Diagnosis: Blood pressure elevated, HbA1c levels improved
Doctor's Notes: Adjust diet to reduce salt intake. Blood pressure medication dosage increased from 5mg to 10mg. Follow-up in 3 months.
Date of Visit: July 1, 2024
Reason for Visit: Annual physical
Diagnosis: General good health, weight stable, cholesterol slightly elevated
Doctor's Notes: Continue with statin therapy and monitor dietary cholesterol intake.
**Lab Results**
Test	Result
HbA1c	6.7% (improved from 7.1% in June)
Blood Pressure	140/90 mmHg (elevated)
Cholesterol	Total 210 mg/dL, LDL 140 mg/dL, HDL 50 mg/dL (borderline high) 
**Immunizations**
Influenza: Received October 2023
Tetanus: Received February 2021
COVID-19: Fully vaccinated (booster received March 2024)
**Plan/Recommendations**
Next Visit: January 2025
Continue regular exercise (30 minutes per day, 5 times a week)
Reduce sodium intake, target under 2000 mg/day
Revisit in 3 months for blood pressure monitoring
*Note that since this system is mostly concerned with surgery, the medical record information is mostly free text

> **Question:** In the project documentation there are two concepts related to the Patient: Medical Records and Appointment History. Can you tell us what's the difference between the two? Or are these both the same concept?
> 
> **Answer:** The appointment history in this case is the list of surgeries the patient has had in the past and the scheduled or requested operations.
A medical record is a comprehensive and organized collection of information about a patient's medical history, diagnoses, treatments, and healthcare interactions.

> **Question:** It is specified that the admin can input some of the patient's information (name, date of birth, contact information, and medical history). Do they also input the omitted information (gender, emergency contact and allergies/medical condition)?
Additionally, does the medical history that the admin inputs refer to the patient's medical record, or is it referring to the appointment history?
> 
> **Answer:** the admin can not input medical history nor allergies. they can however input gender and emergency contact



### 1.3. Acceptance Criteria

-**AC 1:** Admins can input patient details such as first name, last name, date of birth, contact information, and medical history.

-**AC 2:** A unique patient ID (Medical Record Number) is generated upon profile creation.

-**AC 3:** The system validates that the patient’s email and phone number are unique.

-**AC 4:** The profile is stored securely in the system, and access is governed by role-based permissions.


### 1.4. Found out Dependencies

* This Use Case is relative to US 5.1.8, which is related to the creation of a new patient profile, by an admin.
* It relates to the following Use Cases as well:
  - [UC04](../../UC004/README.md) - As a Patient, I want to update my user profile, so that I can change my personal details and preferences.
  - [UC05](../../UC005/README.md) - As a Patient, I want to delete my account and all associated data, so that I can
exercise my right to be forgotten as per GDPR.
  - [UC07](../../UC007/README.md) - As a Patient, I want to log in to the healthcare system using my external IAM credentials, so that I can access my appointments, medical records, and other features securely.
  - [UC09](../../UC009/README.md) - As an Admin, I want to edit an existing patient profile, so that I can update their information when needed.
  - [UC010](../../UC010/README.md) - As an Admin, I want to delete a patient profile, so that I can remove patients who are no longer under care.
  - [UC011](../../UC011/README.md) - As an Admin, I want to list/search patient profiles by different attributes, so that I can view the details, edit, and remove patient profiles.
  - [UC016](../../UC016/README.md) - As a Doctor, I want to request an operation, so that the Patient has access to the necessary healthcare.


### 1.5 Input and Output Data

**Input Data:**

- Automatic data:
	-  Medical Record Number (unique identifier)
- First Name
- Last Name
- Full Name
- Date of Birth
- Gender
- Contact Information (email, phone)
- Allergies/Medical Conditions (optional)
- Emergency Contact
- Appointment History (list of previous and upcoming appointments)

**Output Data:**
- Shows verification/erros message

### 1.6. System Sequence Diagram (SSD)

![SSD UC008](svg/uc008-system-sequence-diagramUC008.svg)

### 1.7 Other Relevant Remarks

