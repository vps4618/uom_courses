/*
! Creatng a table
? CREATE TABLE table_name (
?   column_1 data_type PRIMARY KEY,
?   column_2 data_type NOT NULL ,
?   column_3 data_type,   
? );

! Dropping a table
? DROP TABLE table_name;

!!  SELECT
! Retrieve all data from a table
? SELECT * FROM table_name;

! Retrieve data in specific columns  of a table
? SELECT column_1,column_2,column_3
? FROM table_name;

! Retrieving data based on a condition
? SELECT * FROM table_name
? WHERE search_condition;

!! INSERT
! Inserting data into a table (1 row at a time)
? INSERT INTO table_name(column_1,column_2,...) VALUES
? (value_1,value_2,...);

!! UPDATE
! Updating data in a table (can use on multiple columns)
? UPDATE table_name
? SET column = value
? WHERE search_condition;

!! DELETE
!  Delete data from a table
? DELETE FROM table_name
? WHERE search_condition;

*/