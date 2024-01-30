-- 코드를 입력하세요
SELECT count(NAME) as count
from (select name from ANIMAL_INS group by name) a