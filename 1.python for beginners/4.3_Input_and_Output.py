# input
x = input("Enter a number : ")
print(type(x))
x = int(x)
print(type(x))

# output
print(x)

# print multiple values
# print several variables inline
print(1,2,3,4)
# change default seperator
print(1,2,3,4,sep="*",end="#")
print("\n")

# formatting output
# use curly braces {} as placeholders
a = 1
b = 2
print("Value of a is {} and value of b is {}.".format(a,b))
# printing by specifying the order
print("Value of b is {1} and value of a is {0}.".format(a,b))