create database codingon character set utf8mb4 collate utf8mb4_unicode_ci;
show databases;

use codingon;

-- 환자 테이블 생성
CREATE TABLE Patient (
    patient_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    birth_date DATE NOT NULL
);

-- 의사 테이블 생성
CREATE TABLE Doctor (
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    specialty VARCHAR(100) NOT NULL
);

-- 진료 테이블 생성
CREATE TABLE Appointment (
    appointment_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    appointment_date DATE NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES Patient(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES Doctor(doctor_id)
);

-- 진단 테이블 생성
CREATE TABLE Diagnosis (
    diagnosis_code INT PRIMARY KEY AUTO_INCREMENT,
    diagnosis_name VARCHAR(100) NOT NULL,
    description TEXT
);

-- 진단내역 테이블 생성
CREATE TABLE Diagnosis_Record (
    appointment_id INT NOT NULL,
    diagnosis_code INT NOT NULL,
    PRIMARY KEY (appointment_id, diagnosis_code),
    FOREIGN KEY (appointment_id) REFERENCES Appointment(appointment_id),
    FOREIGN KEY (diagnosis_code) REFERENCES Diagnosis(diagnosis_code)
);

-- Patient 테이블에 데이터 삽입
INSERT INTO Patient (patient_id, name, birth_date) VALUES
(1, '김철수', '1990-05-15'),
(2, '박영희', '1985-11-22'),
(3, '이지원', '2003-03-08'),
(4, '최민기', '1977-09-25'),
(5, '한지영', '1992-07-01');

-- Doctor 테이블에 데이터 삽입
INSERT INTO Doctor (doctor_id, name, specialty) VALUES
(1, '김의사', '내과'),
(2, '박의사', '외과'),
(3, '이의사', '소아과'),
(4, '최의사', '정형외과'),
(5, '한의사', '피부과');

-- Diagnosis 테이블에 데이터 삽입
INSERT INTO Diagnosis (diagnosis_code, diagnosis_name, description) VALUES
(1, '감기', '코감기 증상'),
(2, '골절', '팔 골절'),
(3, '알레르기', '꽃가루 알레르기'),
(4, '피부염', '건선 증상'),
(5, '귀염증', '중이염 증상');

-- Appointment 테이블에 데이터 삽입
INSERT INTO Appointment (appointment_id, patient_id, doctor_id, appointment_date) VALUES
(1, 1, 1, '2023-06-01'),
(2, 2, 3, '2023-06-02'),
(3, 3, 2, '2023-06-03'),
(4, 4, 4, '2023-06-04'),
(5, 5, 5, '2023-06-05');

-- Diagnosis_Record 테이블에 데이터 삽입
INSERT INTO Diagnosis_Record (appointment_id, diagnosis_code) VALUES
(1, 1),
(2, 5),
(3, 2),
(4, 2),
(5, 4);


show tables;

-- 1. 모든 환자의 이름과 생년월일을 조회하시오.
select name, birth_date from Patient;

-- 2. 전공이 '내과'인 의사의 이름을 조회하시오.
select name from doctor where specialty = '내과';

-- 3. 2023년 6월 1일에 진료받은 환자의 이름과 의사 이름을 조회하시오.
select p.name, d.name from Appointment a join patient p on a.patient_id = p.patient_id
	join doctor d on a.doctor_id = d.doctor_id
	where appointment_date = '2023-06-01';

-- 4. 진단명이 '골절'인 진단내역의 환자 이름과 진료일자를 조회하시오.
select p.name, a.appointment_date from Diagnosis_Record dr join Appointment a on dr.appointment_id = a.appointment_id
		join Patient p on p.patient_id = a.patient_id
        join Diagnosis d on d.diagnosis_code = dr.diagnosis_code
        where d.diagnosis_name = '골절'; 

-- 5. 각 의사가 진료한 환자 수를 조회하시오.
select count(a.patient_id) as 'count_patient', d.name from doctor d 
		join appointment a on a.doctor_id = d.doctor_id
		group by d.name;

-- 6. 가장 최근에 진료받은 환자의 이름과 진료일자를 조회하시오.
select p.name, a.appointment_date from patient p
		join Appointment a on a.patient_id = p.patient_id
        order by a.appointment_date desc limit 1;