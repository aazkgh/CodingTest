SELECT ITEM_ID, ITEM_NAME, RARITY  
FROM ITEM_INFO AS I
WHERE I.ITEM_ID NOT IN (
    SELECT PARENT_ITEM_ID
    FROM ITEM_TREE AS T
    WHERE PARENT_ITEM_ID IS NOT NULL
)
ORDER BY ITEM_ID DESC