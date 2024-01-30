-- 코드를 입력하세요
SELECT CATEGORY, count(CATEGORY)
from (select substr(PRODUCT_CODE, 1, 2) as CATEGORY,  PRODUCT_CODE from PRODUCT) a
group by CATEGORY
order by PRODUCT_CODE