CREATE SCHEMA IF NOT EXISTS cursos_crud;
USE cursos_crud;
CREATE TABLE cursos_crud.sample_data (
	id 			int primary key auto_increment,
    first_name 	varchar(100) not null,
    last_name	varchar(100) not null,
    age			int,
    gender		varchar(15)
);