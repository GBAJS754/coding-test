-- 코드를 작성해주세요
-- ITEM_ID가 PARENT_ITEM_ID에 포함되지않는 것을 찾기
-- join 사용하기
select a.ITEM_ID, a.ITEM_NAME, a.RARITY
from ITEM_INFO a
left join ITEM_TREE b
on a.ITEM_ID = b.PARENT_ITEM_ID
where b.PARENT_ITEM_ID is null
order by ITEM_ID desc