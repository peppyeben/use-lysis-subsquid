module.exports = class Data1725171591696 {
    name = 'Data1725171591696'

    async up(db) {
        await db.query(`CREATE TABLE "name_registered_event" ("id" character varying NOT NULL, "name" text NOT NULL, "label" text NOT NULL, "owner" text NOT NULL, "expires" numeric NOT NULL, CONSTRAINT "PK_ded938a311145daadc3cd652c7e" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e1f6420c2f81f38dec8e9554a0" ON "name_registered_event" ("name") `)
        await db.query(`CREATE INDEX "IDX_496445d29cefe03909a6fd818d" ON "name_registered_event" ("owner") `)
        await db.query(`CREATE TABLE "name_renewed_event" ("id" character varying NOT NULL, "name" text NOT NULL, "label" text NOT NULL, "expires" numeric NOT NULL, CONSTRAINT "PK_ea7de89c4c47a149eca0e13cbd6" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_789175150c539317f4e324f040" ON "name_renewed_event" ("name") `)
        await db.query(`CREATE TABLE "discount_applied_event" ("id" character varying NOT NULL, "registrant" text NOT NULL, "discount_key" text NOT NULL, CONSTRAINT "PK_156725ad91a2c4c5fa4c6ddc1c7" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "eth_payment_processed_event" ("id" character varying NOT NULL, "payee" text NOT NULL, "price" numeric NOT NULL, CONSTRAINT "PK_af6e0fc37da982f98f37ccd2d9b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_ce18881b2f9e29fcd50464baf0" ON "eth_payment_processed_event" ("payee") `)
        await db.query(`CREATE TABLE "discount_details" ("id" character varying NOT NULL, "active" boolean NOT NULL, "discount_validator" text NOT NULL, "key" text NOT NULL, "discount" numeric NOT NULL, CONSTRAINT "PK_1e92abbc919e0fc406946bf94a7" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "discount_updated_event" ("id" character varying NOT NULL, "discount_key" text NOT NULL, "details_id" character varying, CONSTRAINT "PK_06fc20611d8f6ba18b13dc8c263" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_f548a19cc679afe132bd7be92a" ON "discount_updated_event" ("details_id") `)
        await db.query(`CREATE TABLE "price_oracle_updated_event" ("id" character varying NOT NULL, "new_prices" text NOT NULL, CONSTRAINT "PK_a3777b671a908641140b0a57577" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "reverse_registrar_updated_event" ("id" character varying NOT NULL, "new_reverse_registrar" text NOT NULL, CONSTRAINT "PK_fa3ec8f009bbb93a2965bf019f9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "payment_receiver_updated_event" ("id" character varying NOT NULL, "new_payment_receiver" text NOT NULL, CONSTRAINT "PK_f0cf4931dde2f6a4156b3970571" PRIMARY KEY ("id"))`)
        await db.query(`ALTER TABLE "discount_updated_event" ADD CONSTRAINT "FK_f548a19cc679afe132bd7be92a6" FOREIGN KEY ("details_id") REFERENCES "discount_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "name_registered_event"`)
        await db.query(`DROP INDEX "public"."IDX_e1f6420c2f81f38dec8e9554a0"`)
        await db.query(`DROP INDEX "public"."IDX_496445d29cefe03909a6fd818d"`)
        await db.query(`DROP TABLE "name_renewed_event"`)
        await db.query(`DROP INDEX "public"."IDX_789175150c539317f4e324f040"`)
        await db.query(`DROP TABLE "discount_applied_event"`)
        await db.query(`DROP TABLE "eth_payment_processed_event"`)
        await db.query(`DROP INDEX "public"."IDX_ce18881b2f9e29fcd50464baf0"`)
        await db.query(`DROP TABLE "discount_details"`)
        await db.query(`DROP TABLE "discount_updated_event"`)
        await db.query(`DROP INDEX "public"."IDX_f548a19cc679afe132bd7be92a"`)
        await db.query(`DROP TABLE "price_oracle_updated_event"`)
        await db.query(`DROP TABLE "reverse_registrar_updated_event"`)
        await db.query(`DROP TABLE "payment_receiver_updated_event"`)
        await db.query(`ALTER TABLE "discount_updated_event" DROP CONSTRAINT "FK_f548a19cc679afe132bd7be92a6"`)
    }
}
