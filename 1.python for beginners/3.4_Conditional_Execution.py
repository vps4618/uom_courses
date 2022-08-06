#if 
time = 10
if time<12:
    print("It's not 12 yet")
    print("Good Morning")
if time>12:
    print("It's past 12!")
    print("Good Afternoon")
print("Have a good day")    

print("\n")

#if and else
time = 14
if time<12:
    print("Good Morning!")
else:
    print("Good Afternoon!")    

print("\n")

#if and elif
marks = 45
if marks > 75:
    print("A")
elif 60 <= marks < 75:
    print("B")
elif 40  <= marks < 60:
    print("C") 
else:
    print("F")          

print("\n")

#statements with multiple results
x = 6
if x > 7:
    print("over 7")
elif x >= 5:
    print("over 5")
elif x >= 2:
    print("over 2")
else:
    print("under 2")              

print("\n")

if x > 7:
    print("over 7")
if x >= 5:
    print("over 5")
if x >= 2:
    print("over 2")
if x <= 2:
    print("under 2")    
  

