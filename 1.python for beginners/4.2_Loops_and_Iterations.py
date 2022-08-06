# for  loop
for counter in [1,2,3,4,5]:
    print("This is a loop : counter = ", counter)

# range function
# range(stop)
print(list (range(10)))    
# range(start,stop)
print(list (range(5,10)))
# range(start,stop,step)
print(list (range(2,11,2)))
print(list (range(-10,-100,-30)))

# Example (get sum of all even numbers up to 100)
total = 0
for counter in range(0,101,2):
    total=total+counter
print("total = ",total)

# while loop
num = int(input("Enter number of times to repeat : "))
while (num!=0):
    print("Hello World !")
    num = num - 1
print("End")    

#  Example
for x in range(0,5):
    for y in range(0,10):
        print('$',end='')
    print("")    

# break keyword
n = 10
for  i in range(0,n):
    print(i,"Hello")
    if(i==3):
        print("Count Aborted")
        break
    print(i,"World!")
print("End of program")        

# continue keyword
for i in range(-2,3):
    if i==0:
        continue
    print("5 divided by ",i,"is : ",(5.0/i))
print("End")    

# pass keyword
fruits = ['Apple','Orange','Grapes','Banana']
for fruit in fruits:
    pass # Not sure what to do
print("Done")

# else keyword
numbers = [3,2,8,2,9]
for number in numbers:
    print("looking at : ",number)
    if  number == 5:
        print("Found Number")
        break
else:
    print("Number Not Found") 
print("End")       