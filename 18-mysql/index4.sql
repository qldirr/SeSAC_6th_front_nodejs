-- join : 여러 테이블 합쳐서 정보 조회
select * from customer, orders where customer.custId = orders.custId;
select * from customer join orders on customer.custId = orders.custId;

-- 고객 이름, 고객이 주문한 상품명, 상품 가격 조회
select custName, prodName, price from customer join orders on customer.custId = orders.custId;

-- 고객 이름별로 주문한 제품 총 구매액을 출력하고 총 구매액 기준으로 오름차순
select custName, sum(price* amount) as 'total_price' from customer join orders on customer.custId = orders.custId group by custName order by total_price;

-- natural join
select * from customer natural join orders;


create table instructor (
	id int primary key,
    name varchar(7),
    dept_name varchar(7),
    salary int
);

create table teaches (
	id int primary key,
    course varchar(7),
    semester varchar(7),
    year varchar(4)
);

insert into instructor values (1, 'james', '심리', 95000);
insert into instructor values (2, 'john', '컴공', 95000);

insert into teaches values (1, '운영체제', '봄', '2022');
insert into teaches values (2, '상담심리', '가을', '2023');


-- SQL에서 기본적으로 join키워드를 사용하거나 ,를 통해 연결하면 inner join 수행, 조건을 설정하지 않은 inner join은 cross join 연산
select * from instructor join teaches;
select * from teaches, instructor;

select * from instructor i join teaches t on i.id = t.id;

delete from teaches where id <= 2;
insert into instructor values (3, 'mark', '수학', 75000);
insert into instructor values (4, 'tom', '심리', 90000);
insert into teaches values (3, '인공지능', '봄', '2022');
insert into teaches values (4, '사회심리', '가을', '2023');
insert into teaches values (5, '네트워크', '봄', '2022');
insert into teaches values (6, '알고리즘', '가을', '2023');

-- left outer join
select * from instructor i left join teaches t on i.id = t.id;

-- right outer join
select * from instructor i right join teaches t on i.id = t.id;

-- full outer join
-- mysql 에서는 full outer join을 지원하지 않음
-- union이라는 키워드를 통해서 full outer join을 구현할 수는 있음
select * from instructor I left outer join teaches T on I.id = T.id
union
select * from instructor I right outer join teaches T on I.id = T.id;
