-- 데이터베이스 : 데이터의 집합
-- DBMS : 데이터베이스 운영/관리하는 프로그램 ex)MySQL
-- SQL : 데이터베이스 구축, 관리하고 활용하기 위해 사용하는 언어
-- 참고) 스키마 == 데이터베이스

-- DDL(Data Definition Language) : 데이터베이스, 테이블 정의하는 언어

-- [db 관련 명령어]
-- db 생성
create database codingon character set utf8mb4 collate utf8mb4_unicode_ci;

-- db 목록
show databases;

-- db 사용 선언
use codingon;

-- db 삭제
drop database codingon;

-- [테이블 관련 명령어]
-- 제약 조건 - primary key, foreign key, not null, unique(중복 허용 X, null 가능), auto_increment(자동 숫자 증가), default(기본값)
-- 테이블 생성
create table products (
	id int auto_increment primary key,
    name varchar(50) not null,
    model_number varchar(15) not null,
    series varchar(30) not null
);

-- 테이블 목록 확인
show tables;

 -- 테이블 구조 확인
 desc products;
 
 -- 테이블 삭제
 drop table products;
 
 -- 테이블 수정 - 이미 생성된 테이블에 데이터가 추가되었는데 테이블 구조가 수정되어야 하는 경우
alter table products add new_col varchar(20);   -- 컬럼 추가 : 기존 데이터들은 새 컬럼이 생겼으니 null 이 할당됨
alter table products modify new_col int;    -- 컬럼 타입 수정
alter table products drop new_col;    -- 컬럼 삭제

-- 

