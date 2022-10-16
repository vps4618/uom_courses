import pymysql

pwd = input("Enter password : ")
# open database connection
db = pymysql.connect(host='localhost', user='root',
                     password=pwd, database='testdb')

# prepare a cursor object using cursor() method
cursor = db.cursor()

# execute sql query using execute() method
cursor.execute("SELECT VERSION()")

# fetch a single row using fetchone() method
data = cursor.fetchone()
print("Database version : %s" % data)

# disconnect from server
db.close()
