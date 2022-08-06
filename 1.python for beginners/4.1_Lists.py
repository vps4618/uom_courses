#creating a list
values = [15,20,96,32,17]

#print values
print(values[0])
print(values[4])

#printing values from range
print(values[0:3]) #[m:n] -> m to (n-1)
print(values[2:5])

#appending to a list
values.append(60)
#print after apending value
print(values)

#updating a value in a list
values[2] = 60
#print list after updating it
print(values)

#deleting a  value from list
values.remove(60)#In this we have to know value
#print list after deleting a value
print(values)

#but we can delete values from a list without knowing value
del values[1]
#print list
print(values)

#practice exercise 1
list = ['ph','ch',1997,2000,2000,2009]
list[2] = 2001
list.remove(2000)
list.append(2015)
print(list[2:])

#Multi dimensional lists
data = [[1,1,1],[2,2,2],[3,3,3]]
print(data[1][1])

#updating values in two dimensional lists
data[1][1] = 25
print(data)

#appending values in two dimensional lists
data[1].append(2)
print(data)

#list operations
#how to find length in list
print(len([1,2,3]))

#concatenation
a = [1,2,3]
b = [4,5,6]
print(a+b)

#Repitition
print(["Hi"] * 4)

#Membership
print(3 in [1,2,3])

#Iterations
for x in [1,2,3]:
    print(x)

#Indexing and slicing
#Negative indices from start from right to left from -1
L = ['a','b','c']
#indexing
print(L[2])
print(L[-2])    
#slicing
print(L[1:])

#Exercise 2
numList = [2,4,6,8,3,4,2,1]
evenList = []
for i in numList:
    if(i%2==0) and (i not in evenList):
        evenList.append(i)
print(evenList)        
#stopping without closing when executing program
input()