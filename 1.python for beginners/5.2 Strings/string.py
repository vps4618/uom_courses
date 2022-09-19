# string operations
# concatinating methods
# method 1
word = "Help" + "A"
print(word + "\n")

# creating multiple strings
mstring = "<" + word * 5 + ">"
print(mstring + "\n")

# method 2
word2 = "GM" "Boy"  # not work with arbitrary string expressions
print(word2 + "\n")

# accessing elements  and slicing
print(word[4])
print(word[0:2])  # output not include 2nd index charactor
print(word[2:4] + "\n")  # output not include 4th index charactor

print(word[-1])  # The last character
print(word[-2])  # The character before the last character
print(word[-2:])  # The last two characters
print(word[:-2])  # Everything except the last two

# ! strings are immutable
word3 = "Help" "A"
#  ? below code segment produce error since strings are immutable
# word3[0] = "x"
print(word3 + "\n")

# || create a new string
word4 = "HelpA"
word5 = "x" + word4[1:]
print(word5 + "\n")
word6 = "Splat" + word4[4]
print(word6 + "\n")

# * retrive length of a string
word7 = "Hello"
lenOfWord7 = len(word7)
print(str(lenOfWord7) + "\n")

# || [ not in ] and [ in ] keywords
word8 = "Hello World"
print("W" not in word8)
print("e" in word8)
print("\n")

# ! r/R (Raw String) <- Suppresses actual meaning of Escape characters
print (r'\n')
print (R'\n') 

# ? %: Format - Performs String formatting
print("My name is %s and I am %d years old!" % ('Kumar', 20)) 