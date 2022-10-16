import pymysql

pwd = input("Enter password : ")
db = pymysql.connect(host="localhost", user="root",
                     password=pwd, database="testdb")

cursor = db.cursor()

# The format string is not really a normal Python format string. You must always use %s for all fields.
# %d not working
sql = "INSERT INTO EMPLOYEE (FIRST_NAME,LAST_NAME,AGE,SEX,INCOME) VALUES (%s,%s,%s,%s,%s)"
data = [('Supun', 'Sanjana', 17, 'M', 200000.500),
        ('Yasitha', 'Buddhima', 17, 'M', 35000.500),
        ('Navitha', 'Iduwara', 17, 'M', 50000.500),
        ('Miyuru', 'Rasoj', 17, 'M', 60000.500)]
try:
    cursor.executemany(sql, data)
    db.commit()
except:
    db.rollback()

db.close()
