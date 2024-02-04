-- 코드를 입력하세요
select b.APNT_NO, a.PT_NAME, a.PT_NO, b.MCDP_CD, b.DR_NAME, b.APNT_YMD
from PATIENT a
join  (SELECT b.MCDP_CD,DR_NAME, APNT_YMD, a.PT_NO, a.APNT_NO
from APPOINTMENT a
join DOCTOR b
on a.MDDR_ID = b.DR_ID
where APNT_CNCL_YN = "N" and APNT_YMD like "2022-04-13%" and b.MCDP_CD = "CS") b
on a.PT_NO = b.PT_NO
order by b.APNT_YMD asc