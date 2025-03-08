BEGIN TRANSACTION;
CREATE TABLE "pop_up_questions" (
"question" TEXT
);
INSERT INTO "pop_up_questions" VALUES('Do you drive?');
INSERT INTO "pop_up_questions" VALUES('Do you have kids of school age?');
INSERT INTO "pop_up_questions" VALUES('Do you like sports?');
INSERT INTO "pop_up_questions" VALUES('Do you like a pub quiz?');
INSERT INTO "pop_up_questions" VALUES('Do you like a Dominos?');
COMMIT;
