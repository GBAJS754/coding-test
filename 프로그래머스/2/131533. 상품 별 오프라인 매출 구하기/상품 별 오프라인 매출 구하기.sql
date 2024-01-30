-- 코드를 입력하세요
SELECT PRODUCT_CODE, PRICE * sum(b.SALES_AMOUNT) as SALES
from PRODUCT a 
right join OFFLINE_SALE b
on a.PRODUCT_ID = b.PRODUCT_ID
group by a.PRODUCT_CODE
order by SALES desc , a.PRODUCT_CODE asc