def printme(str):
    # function docstring -> describe what function does
    "Put a text message to the screen"
    print(str)
    return


printme("vishwa")

# print doc string of max inbuilt function
# print(max.__doc__)

# exercise 1


def greet(name):
    "Greet a person with name"
    print("Hello!, " + name)
    return


greet("Nimal")
greet("Kamal")

# exercise 2
Pi = 22/7


def calculateCircumference(radius):
    "Calculate Circumference"
    circumference = 2 * Pi * radius
    return circumference


def calculateArea(radius):
    "Calculate Area"
    area = Pi * radius * radius
    return area


circumference = calculateCircumference(14)
area = calculateArea(14)

print("Circumference is " + str(circumference))
print("Area is " + str(area))

#   Default Parameters
def greet(name, msg="How are you?"):
   print(name + ", " + msg)

greet("John")
greet("John", "Good Evening")
greet("Good Evening")

#  Arbitrary Arguments
def add(*args):
    #sum() is an inbuilt function to sum up a list
    total=(sum(args))
    print("The sum : " ,total)

def greeting(msg, *names):
    for name in names:
        print(msg + ", " + name)

#Calling add() function
add(1,4,5)

#Calling greet() function
greeting("Hello","John","Maggie","Lucy")