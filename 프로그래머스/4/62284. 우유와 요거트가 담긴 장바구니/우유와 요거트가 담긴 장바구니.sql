-- 코드를 입력하세요
SELECT CART_ID
FROM CART_PRODUCTS 
GROUP BY CART_ID
HAVING SUM(CASE WHEN NAME = 'Milk' THEN 1 ELSE 0 END) >= 1
AND SUM(CASE WHEN NAME = 'Yogurt' THEN 1 ELSE 0 END) >= 1
