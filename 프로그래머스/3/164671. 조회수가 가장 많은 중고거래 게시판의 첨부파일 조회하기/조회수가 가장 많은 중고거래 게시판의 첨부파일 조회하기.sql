-- 코드를 입력하세요
select concat("/home/grep/src/",a.BOARD_ID,"/",FILE_ID,FILE_NAME,FILE_EXT) as FILE_PATH
from USED_GOODS_FILE a
join (select VIEWS, BOARD_ID
    from USED_GOODS_BOARD
    order by VIEWS desc
    limit 1) as b
on a.BOARD_ID = b.BOARD_ID
order by a.FILE_ID desc

