SELECT
    A.APNT_NO,          -- 진료예약번호
    P.PT_NAME,          -- 환자이름
    P.PT_NO,            -- 환자번호
    D.MCDP_CD,          -- 진료과코드 (흉부외과)
    D.DR_NAME,          -- 의사이름
    A.APNT_YMD          -- 진료예약일시
FROM
    APPOINTMENT A
JOIN
    PATIENT P ON A.PT_NO = P.PT_NO
JOIN
    DOCTOR D ON A.MDDR_ID = D.DR_ID
WHERE
    DATE_FORMAT(A.APNT_YMD, '%Y-%m-%d') = '2022-04-13'  -- 2022년 4월 13일 진료 예약
    AND A.APNT_CNCL_YN = 'N'                            -- 취소되지 않은 예약
    AND D.MCDP_CD = 'CS'                                -- 흉부외과 (CS)
ORDER BY
    A.APNT_YMD ASC;                                     -- 진료예약일시 기준 오름차순 정렬