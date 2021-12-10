CREATE TABLE scho_profile(
    prof_id BIGSERIAL NOT NULL PRIMARY KEY,
    prof_name VARCHAR(100) NOT NULL,
    prof_description VARCHAR(500) 
);

CREATE TABLE scho_user(
    user_id BIGSERIAL NOT NULL PRIMARY KEY,
    user_identification INTEGER NOT NULL UNIQUE,
    user_name VARCHAR(100) NOT NULL,
    user_lastname VARCHAR(100) NOT NULL,
    user_gender VARCHAR(10) NOT NULL,
    user_age INTEGER,
    user_email VARCHAR(100) NOT NULL UNIQUE,
    user_phone VARCHAR(20),
    user_username VARCHAR(100) NOT NULL UNIQUE,
    user_password VARCHAR(100) NOT NULL ,
    prof_id BIGINT REFERENCES scho_profile(prof_id)
);


CREATE TABLE scho_course(
    cour_id BIGSERIAL NOT NULL PRIMARY KEY,
    cour_name VARCHAR(100) NOT NULL,
    cour_description VARCHAR(100) NOT NULL,
    cour_state BOOLEAN
)


INSERT INTO scho_profile (prof_name, prof_description) values('ADMIN','Administrator');
INSERT INTO scho_profile (prof_name, prof_description) values('STUDENT','Students');
INSERT INTO scho_profile (prof_name, prof_description) values('TEACH','Teacher');

INSERT INTO scho_user (user_identification, user_name, user_lastname, user_gender, user_age, user_email, user_phone, user_username, user_password, prof_id) 
values('1729996745','Damian','Rodriguez','Male',31,'alex56@gmail.com','0967456634','damy','damy',1)





