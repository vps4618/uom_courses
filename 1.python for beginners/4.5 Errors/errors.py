num_input = input("Enter a number : ")

try:
    num_val = int(num_input)
except:
    num_val = -1


if (num_val > 0):
    print("A number was entered !")
else:
    print("Not a Number !")
