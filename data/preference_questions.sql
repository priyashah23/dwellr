BEGIN TRANSACTION;
CREATE TABLE "preference_questions" (
"key" TEXT,
  "definition" TEXT
);
INSERT INTO "preference_questions" VALUES('Q00001','For Sale or To Rent');
INSERT INTO "preference_questions" VALUES('Q00002','Search Area');
INSERT INTO "preference_questions" VALUES('Q00003','Radius');
INSERT INTO "preference_questions" VALUES('Q00004','Min Bedrooms');
INSERT INTO "preference_questions" VALUES('Q00005','Max Bedrooms');
INSERT INTO "preference_questions" VALUES('Q00006','Min Price');
INSERT INTO "preference_questions" VALUES('Q00007','Max Price');
INSERT INTO "preference_questions" VALUES('Q00008','Min Rent');
INSERT INTO "preference_questions" VALUES('Q00009','Max Rent');
COMMIT;
