#!/usr/bin/python3

import pymysql
pwd = input("Enter password : ")
# Open database connection
db = pymysql.connect(host='localhost', user='root',
                     password=pwd, database='testdb')

# prepare a cursor object using cursor() method
cursor = db.cursor()

# Prepare SQL query to DELETE required records
sql = "DELETE FROM EMPLOYEE WHERE AGE > '%d'" % (20)
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Commit your changes in the database
   db.commit()
except:
   # Rollback in case there is any error
   db.rollback()

# disconnect from server
db.close()