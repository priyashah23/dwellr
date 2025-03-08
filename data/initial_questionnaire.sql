BEGIN TRANSACTION;
CREATE TABLE "initial_questionnaire" (
"key" TEXT,
  "definition" TEXT
);
INSERT INTO "initial_questionnaire" VALUES('Q00001','For Sale or To Rent');
INSERT INTO "initial_questionnaire" VALUES('Q00002','Search Area');
INSERT INTO "initial_questionnaire" VALUES('Q00003','Radius');
INSERT INTO "initial_questionnaire" VALUES('Q00004','Min Bedrooms');
INSERT INTO "initial_questionnaire" VALUES('Q00005','Max Bedrooms');
INSERT INTO "initial_questionnaire" VALUES('Q00006','Min Price');
INSERT INTO "initial_questionnaire" VALUES('Q00007','Max Price');
INSERT INTO "initial_questionnaire" VALUES('Q00008','Min Rent');
INSERT INTO "initial_questionnaire" VALUES('Q00009','Max Rent');
COMMIT;
