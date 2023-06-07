-- boilerplate for sql data table
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE users (
    "_id" serial NOT NULL,
    "google_id" integer NOT NULL,
    CONSTRAINT "user_pk" PRIMARY KEY("_id")
);

CREATE TABLE job_applications (
    "_id" serial NOT NULL, 
    "company_name" varchar, 
    "date_applied"  DATE DEFAULT CURRENT_DATE, 
    "position_name" varchar, 
    "city_name" varchar, 
    "notes_txt" varchar,
    "status" varchar NOT NULL,
    "application_type" varchar,
    "listing_link" varchar,
    "user_id" int NOT NULL,
    CONSTRAINT "job_applications_pk" PRIMARY KEY("_id"),

    CONSTRAINT "users_fk"
        FOREIGN KEY ("user_id")
        REFERENCES users ("_id")
);

ALTER TABLE users ADD COLUMN username VARCHAR(255) NOT NULL, ADD COLUMN password VARCHAR(255) NOT NULL;
