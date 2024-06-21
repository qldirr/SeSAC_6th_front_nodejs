-- create table authors (
-- 	author_id varchar(20) primary key,
--     age int,
--     first_name varchar(5) not null,
--     last_name, 
--     gender varchar(2) not null,
--     email varchar(5),
--     promotion varchar(2) default 'x'
-- );

 desc user;
 
 alter table member modify id varchar(10); 
 alter table member drop age; 
 alter table member add interest varchar(100);
 
 
 create table user (
	id varchar(10) primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender enum('F','M','') default '',
    birthday date not null,
    age int(3) not null default 0
);

insert into user values
	('hong1234', '8o4bkg', '홍길동', 'M', '2000-08-23', 33),
	('sexysung', '87awjkdf', '성춘향', 'F', '1992-08-23', 23),
    ('power01', 'jlj66', '변사또', 'M', '1993-05-20', 20),
    ('sesac5', 'oocd3', '한조', 'F', '1983-05-30', 25),
    ('kimj55', 'yytf', '위도우', 'F', '1998-08-03', 19),
    ('jungg', 'song00', '송하나', 'F', '2000-01-20', 35),
    ('progi', 'kff3333', '정크랫', 'M', '2002-11-30', 27);

select * from user;

-- birthday 기준 오름차순
select * from user order by birthday;

-- gender 이 'M' 인 회원 목록을 name 기준으로 내림차순
select * from user where gender = 'M' order by name;

-- 1990년대에 태어난 회원 id, name 출력
select id, name from user order by birthday;

-- 1. 모든 회원목록을 가져오는데, 이때 birthday 컬럼의 값을 기준으로 올므차순으로 정렬하여 가져오시오.
select * from user order by birthday;
-- 2. 회원 목록 중 gender 컬럼의 값이 "M" 인 회원목록을 가져오는데, 이때 name 컬럼의 값을 기준으로 내림차순 정렬하여 가져오시오.
select * from user where gender = 'M' order by name;
-- 3. 1990 년대에 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주시오.
select id, name from user order by birthday;
-- 4. 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오시오
select * from user where month(birthday) = 6 order by birthday;
-- 5. gender 컬럼의 값이 "M" 이고, 1970 년대에 태어난 회원의 목록을 가져오시오.
select * from user where gender = 'M' and birthday between '1970-01-01' and '1979-12-31';
-- 6. 모든 회원목록 중 age 를 기준으로 내림차순 정렬하여 가져오는데, 그때 처음 3개의 레코드만 가져오시오.
select * from user order by age desc limit 3;
-- 7. 모든 회원 목록 중 나이가 25 이상 50 이하인 회원의 목록을 출력하시오.
select * from user where age between 25 and 50;
-- 8. id 컬럼의 값이 hong1234 인 레코드의 pw 컬럼의 값을 12345678로 변경하시오.
update user set pw = 12345678 where id = 'hong1234';
-- 9. id 컬럼의 값이 jungkrat인 레코드 삭제하시오.
delete from user where id = 'jungkrat';

CREATE TABLE authors (
    author_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50)
);
-- books 테이블 생성
CREATE TABLE books (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author_id INT,
    publication_date DATE,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);
-- orders 테이블 생성
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    book_id INT,
    customer_name VARCHAR(50),
    order_date DATE,
    FOREIGN KEY (book_id) REFERENCES books(book_id)
);

show tables;

create database codingonexample character set utf8mb4 collate utf8mb4_unicode_ci;

INSERT INTO authors (author_id, first_name, last_name, email)
VALUES (1, 'J.K.', 'Rowling', 'jkrowling@gmail.com'),
       (2, 'George R.R.', 'Martin', 'grmartin@yahoo.com'),
       (3, 'Stephen', 'King', 'sking@hotmail.com');

-- Add data to the books table
INSERT INTO books (book_id, title, author_id, publication_date)
VALUES (1, 'Harry Potter and the Philosopher''s Stone', 1, '1997-06-26'),
       (2, 'A Game of Thrones', 2, '1996-08-06'),
       (3, 'The Shining', 3, '1977-01-28');

-- Add data to the orders table
INSERT INTO orders (order_id, book_id, customer_name, order_date)
VALUES (1, 1, 'John Smith', '2022-02-15'),
       (2, 2, 'Jane Doe', '2022-02-16'),
       (3, 3, 'Bob Johnson', '2022-02-17');
       
-- 1. author_id가 1인 작성자의 이메일을 jkrowling@yahoo.com으로 업데이트하는 SQL 문을 작성합니다.
update authors set email = 'jkrowling@yahoo.com' where author_id = 1;

-- 2. books 테이블에서 book_id 2인 책을 삭제하는 SQL 문을 작성합니다.
delete from orders where book_id = 2;
delete from books where book_id = 2;

-- 3. 다음 세부 정보가 포함된 새 책을 삽입하는 SQL 문을 작성합니다.
-- 책 ID: 4
-- 제목: The Stand
-- 저자 ID: 3
-- 발행일자 : 1978-01-01
insert into books values (4, 'The Stand', 3, '1978-01-01');

-- 4. book_id 1인 책의 출판 날짜를 1997-06-30으로 업데이트하는 SQL 문을 작성하십시오.
update books set publication_date = '1997-06-30' where book_id = 1;

-- 5. 022-02-17 이전에 접수된 모든 주문을 삭제하는 SQL 문을 작성합니다.
SET SQL_SAFE_UPDATES = 0;
delete from orders where order_date < '2022-02-17';

-- 6. 다음 세부 정보와 함께 새 주문을 삽입하는 SQL 문을 작성합니다.
-- 주문 ID: 4
-- 책 ID: 1
-- 고객 이름: Sarah Johnson
-- 주문일자 : 2022-02-18
INSERT INTO orders (order_id, book_id, customer_name, order_date) VALUES (4, 1, 'Sarah Johnson', '2022-02-18');

-- 7. order_id가 1인 주문의 고객 이름을 Jack Smith로 업데이트하는 SQL 문을 작성합니다.
update orders set customer_name = 'Jack Smith' where order_id = 1;

-- 8. 다음 세부 정보와 함께 새 작성자를 삽입하는 SQL 문을 작성합니다.
-- 저자 ID: 4
-- 이름: agatha
-- 성: christie
-- 이메일: agatha.christie@example.com
INSERT INTO authors (author_id, first_name, last_name, email) VALUES (4, 'agatha', 'christie', 'agatha.christie@example.com');

-- 9. author_id 2인 작성자의 성을 Martinez로 업데이트하는 SQL 문을 작성합니다.
update authors set last_name = 'Martinez' where author_id = 2;

-- 10. author_id 3인 저자가 쓴 모든 책을 삭제하는 SQL 문을 작성합니다.
delete from author where author_id = 3;
delete from books where author_id = 3;


CREATE TABLE departments (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  location VARCHAR(50)
);
DESC departments;

CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);
DESC employees;

INSERT INTO departments (id, name, location)
VALUES
  (1, 'Sales', 'New York'),
  (2, 'Marketing', 'San Francisco'),
  (3, 'Engineering', 'Seattle');

INSERT INTO employees (id, name, age, department_id)
VALUES
  (1, 'John Doe', 25, 1),
  (2, 'Jane Smith', 30, 1),
  (3, 'Bob Johnson', 40, 2),
  (4, 'Alice Lee', 35, 3),
  (5, 'Tom Wilson', 28, 3);
  
-- 1. 모든 직원을 직원 테이블에 나열합니다.
select * from employees;

-- 2. 나이순으로 직원 테이블에 있는 모든 직원을 나이순(내림차순)으로 나열합니다.
select * from employees order by age desc;

-- 3. 직원 테이블에 30세 이상인 직원의 이름과 나이를 나열합니다.
select name, age from employees where age >= 30;

-- 4. 영업부에서 근무하는 직원의 이름과 부서 ID를 직원 표에 나열합니다.
select e.name, e.department_id from employees e
join departments d on e.department_id = d.id
where d.name = 'Sales';

-- 5. 엔지니어링 부서에 근무하고 30세 미만인 직원의 이름과 나이를 직원 테이블에 나열합니다.
select e.name, e.age from employees e
join departments d on e.department_id = d.id
where d.name = 'Engineering' and e.age < 30;

-- 6. 직원 테이블에서 직원 수를 계산합니다.
select count(*) total_employees from employees;

-- 7. 직원 테이블에서 각 부서의 직원 수를 계산합니다.
select count(*) as 'count_employees', d.name from employees e join departments d on e.department_id = d.id group by department_id ;

-- 8. 직원 평균 나이를 계산합니다.
select avg(age) as 'avg_age' from employees;

-- 9. 부서별 평균 나이를 계산합니다.
select avg(age) as 'avg_age', d.name from employees e join departments d on e.department_id = d.id group by department_id ;

-- 10. 부서 테이블에서 지역 컬럼의 두번째 글자가 e인 부서를 계산합니다.
select * from departments where location like '_e%';

-- 11. 부서 테이블에서 지역 컬럼에 공백이 들어가는 부서를 계산합니다.
select * from departments where location like '% %';

-- 12. 직원 테이블에서 이름 컬럼에서 마지막 글자가 n인 사원을 계산합니다.
select * from employees where name like '%n';
