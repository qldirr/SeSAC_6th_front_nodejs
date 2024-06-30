use codingon;

create table visitor (
	id int auto_increment primary key,
    name varchar(10) not null,
    comment mediumtext
);
desc visitor;
select * from visitor;

insert into visitor values(null, '홍길동', '내가 왔다'),
							(null, '이찬혁', '으라차차');
insert into visitor values(null, '이수현', '아뵤');
                            
-- 사용자 추가
create user 'user'@'%' identified by '1234';
-- user 계정에 DB 권한 부여(모든 DB에 접근 가능하도록)
grant all privileges on *.* to 'user'@'%' with grant option;
-- 현재 사용중인 MYSQL 캐시를 지우고 새로운 설정 적용
flush privileges;

-- 비번 변경
alter user 'user'@'%' identified with mysql_native_password by '1234';

-- 계정 생성 확인
select * from mysql.user;    
