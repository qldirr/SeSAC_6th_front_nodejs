-- DML( Data Manipulation Language)
create table customer (
	custId char(10) primary key,
    custName varchar(10) not null,
    addr char(10) not null,
    phoneNum char(11),
    birthday date
);

create table orders (
	orderId int auto_increment primary key,
    custId char(10) not null,
    prodName char(6) not null,
    price int not null,
    amount smallint not null,
    foreign key (custId) references customer(custId) on update cascade on delete cascade
);

-- 외래키 제약 조건
-- 두 테이블 사이의 관계를 맺음 -> 데이터의 무결성
-- 다른 테이블의 기본키를 이 테이블의 외래키로 연결

-- 기준 테이블 : 기본키를 갖는 테이블(customer)
-- 참조 테이블 : 외래키가 있는 테이블(orders)
-- 외래키 연결 : foreign key (참조테이블_컬럼명) references 기준테이블(컬럼명)

-- on update cascade : 기준테이블 데이터 변경 -> 참조테이블 데이터 변경
-- on delete cascade : 기준테이블 데이터 삭제 -> 참조테이블 데이터 삭제

-- 테이블끼리 관계를 맺고나면 테이블 삭제시 주의
-- customer.custId, orders.custId 관계를 맺음
-- customer에 존재하는 회원만 orders 테이블에 데이터 추가
-- orders테이블이 존재하는 상황에서 customer 테이블을 삭제(drop)하면?? 
-- orders 테이블은 어떤 고객의 생일 정보를 알고 싶어도 customer 이 날라갔기 때문에 알수없음
-- pk/fk 연결된 테이블은 외래키가 설정된 테이블을 먼저 삭제하자

-- insert
insert into customer (custId,custName,addr,phoneNum,birthday)  values('lucky', '홍길동', '미국 뉴욕', '01012345678', '1995-11-30');
insert into customer values('happy', '박길동', '미국 맨허튼', '01022221111', '1999-05-23');   -- 필드명 명시하지 않으면 컬럼이 정의된 순서대로 값 넣기
insert into customer values
	('jio', '박지오', '한국 부산', '01053362122', '2000-08-23'),
	('oij', '김수지', '일본', '01005652304', '2001-12-23'),
    ('bjb', '구하지', '영국', '01000668855', '1975-05-16');
insert into customer values ('kiwi', '김키위', '대한민국 서울', '01012341234', '1990-03-17');
insert into customer values ('apple', '이사과', '대한민국 포항', '01012344321', '1992-06-17');

insert into orders values(null, 'kiwi', '프링글스', 3000, 5);   -- pk 가 auto_increment 면 null을 넣어도 알아서 값 채워줌
insert into orders values(null, 'apple', '프링글스', 3000, 1);
insert into orders values(null, 'kiwi', '홈런볼', 2000, 3);


-- update
-- custId 가 happy인 고객의 주소를 서울로 변경
update customer set addr = '서울' where custId = 'happy';

-- delete
-- custId 가 happy인 고객 정보 삭제
delete from customer where custId = 'happy';

-- 고객 테이블에서 apple이 삭제되었을때 주문 테이블은 어떻게 달라지는지? -> 주문 테이블에서도 삭제(on delete cascade)
delete from customer where custId = 'apple';

select * from customer;
select * from orders;

INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('orange', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

