-- 모든 고객의 아이디 검색
select custId from customer;

-- 모든 고객의 아이디와 생일 검색
select custId,birthday from customer;

-- 컬럼 순서 지정해서 출력
select birthday,custId from customer;

-- 모든 고객의 정보 검색
select * from customer;

-- 고객 테이블의 주소 검색(중복값 제외)
select distinct addr from customer;

-- where
-- 1.비교
-- 강해린고객의 생일 조회
select birthday from customer where custName = '강해린';

-- 강해린 고객을 제외한 나머지 고객의 생일 조회
select birthday from customer where custName != '강해린';

-- 사전 순으로 박민지 고객보다 뒤에 위치한 고객 조회
select * from customer where custName > '박민지';

-- 2.범위
-- 1995~2000년 출생 고객 조회
select * from customer where birthday between '1995-01-01' and '2000-12-31'; 
select * from customer where birthday >= '1995-01-01' and birthday <= '2000-12-31'; 

-- 3.집합
-- 주소가 서울 혹은 런던인 고겍 조회
select * from customer where addr in ('대한민국 서울', '영국 런던');
select * from customer where addr = '대한민국 서울' or addr = '영국 런던';

-- 주소가 서울 혹은 런던이 아닌 고객 조회
select * from customer where addr not in ('대한민국 서울', '영국 런던');

-- 4. 패턴
-- %: 0개 이상의 문자열
-- _: 1개의 단일문자
-- 주소가 '미국 로스앤젤레스'인 고객을 검색
select * from customer where addr like '미국 로스앤젤레스';

-- 주소에 '미국'이 포함되어 있는 고객 검색 (미국에 사는 사람)
select * from customer where addr like '미국%';

-- 고객 이름 두번째 글자가 '지'인 고객 검색
select * from customer where custname like '_지%';
select * from customer where custname like '_지'; -- 검색 결과: 0

-- 고객 이름 세번째 글자가 '수'인 고객
select * from customer where custname like '__수%';
select * from customer where custname like '%수'; -- x => 예외. 지수, 가나다수

-- 5.복합 조건
-- 주소가 대한민국이고 2000년생 이후 출생 고객 검색
select * from customer where addr like '대한민국%' and birthday >= '2000-01-01';

-- 주소가 미국이거나 영국인 고객
select * from customer where addr like '미국%' or addr like '영국%';

-- 폰번호 마지막 자리가 4가 아닌 고객
select * from customer where phoneNum not like '%_4';
-- %_4 : 마지막 글자가 4 ex) 14,1004...
-- %4 : 마지막 글자가 4  ex) 4,14,1004...


-- order by
select * from customer order by custName;
select * from customer order by custName desc;

-- 주의) order by 절은 where절보다 뒤에 위치
-- 2000년 이후 출생자 중 주소를 기준으로 내림차순
select * from customer where birthday >= '2000-01-01' order by addr desc;

-- 2000년 이후 출생자 중 주소를 기준으로 내림차순, 아이디 기준 내림차순
select * from customer where birthday >= '2000-01-01' order by addr desc, custId desc;

-- limit(개수제한)
-- 2000년 이후 출생자 중 주소를 기준으로 내림차순, 아이디 기준 내림차순 최초 4개
select * from customer where birthday >= '2000-01-01' order by addr desc, custId desc limit 4;
select * from customer where birthday >= '2000-01-01' limit 2;
select * from customer limit 2;
select * from customer where addr like '대한민국%' limit 2;


-- 집계 함수 : 계산하여 어떤 값을 리턴하는 함수, 보통 group by랑 함께 사용
-- 주문 테이블에서 상품의 총 판매 개수 검색
select sum(amount) as 'total_amount' from orders;

-- 주문 테이블에서 총 판매 개수 검색 + 의미있는 열이름으로 변경 
select sum(amount) as 'total_amount', avg(amount) as 'avg_amount' from orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
select sum(amount) as 'total_amount', avg(amount) as 'avg_amount', min(price) as 'min_price', max(price) as 'max_price' from orders;

-- 주문 테이블에서 총 주문 건수 (= 튜플 개수)
select count(*) as 'order_amount' from orders;

-- 주문 테이블에서 주문한 고객 수 (중복 없이)
select count(distinct custId) from orders;


-- group by
-- select 절에서 group by 에서 사용한 속성과 집계함수만 사용 가능
-- 고객별로 주문한 주문 건수
select custId, count(*) from orders group by custId;

-- 고객별로 주문한 상품 총 수량
select custId, sum(amount) from orders group by custId;

-- 고객별로 주문한 총 주문액
select custId, sum(price * amount) as 'total_order' from orders group by custId;

-- 총 주문액 top 3 고객
select custId, sum(price * amount) as 'total_order' from orders group by custId order by total_order desc limit 3;

-- 상품별로 판매 개수
select prodName, sum(amount) from orders group by prodName;


-- having : group by 절 이후 추가 조건
-- 총 주문액이 10000원 이상인 고객에 대해 고객별로 주문한 상품 총 수랑
select custId, sum(amount), sum(price*amount) from orders group by custId having sum(price*amount) >= 10000;

-- 총 주문액이 10000원 이상인 고객에 대해 고객별로 주문한 상품 총 수랑(custId 가 'bunny'인 고객 제외)
select custId, sum(amount), sum(price*amount) from orders where custId != 'bunny' group by custId having sum(price*amount) >= 10000;

/*
where VS having
having - 그룹에 대해 필터링(group by 와 같이 쓰임, 집계함수랑 사용 가능, group by 뒤에 위치)
where - 각각의 행에 대해 필터링(group by 보다 앞에 위치, 집계함수 사용 가능하지만 having보다는 덜 자유로움)
*/