-- 코드를 입력하세요
SELECT b.USER_ID, b.NICKNAME, concat(CITY ," ", STREET_ADDRESS1, " ", STREET_ADDRESS2) as 전체주소, concat(substr(b.TLNO,1,3),"-",substr(b.TLNO,4,4),"-",substr(b.TLNO,8,4)) as 전화번호
from USED_GOODS_BOARD a
join USED_GOODS_USER b
on a.WRITER_ID = b.USER_ID
group by b.USER_ID
having count(b.USER_ID) > 2
order by b.USER_ID desc
