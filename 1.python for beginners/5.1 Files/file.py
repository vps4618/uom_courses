# open and read a file
# to open a file use absolute path instead of relative path
# default mode is read
fhandle = open(
    r"F:\documents\uom_courses\1.python for beginners\5.1 Files\hi.txt")

# prints all content
# print(fhandle.read())

# read line by line
print(fhandle.readline().replace("\n", ""))
print(fhandle.readline().replace("\n", ""))
print(fhandle.readline().replace("\n", ""))

fhandle.close()

# write a file ( mode for write to a file -> w , mode for append to a file -> a )
fhandle = open(r"F:\documents\uom_courses\1.python for beginners\5.1 Files\hi.txt","a")
mystring = "\nPython is great.\nFile Handeling is so easy\n"
fhandle.write(mystring)
fhandle.close()
