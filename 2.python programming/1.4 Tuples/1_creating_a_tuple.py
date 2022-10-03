tuple_1 = ('a', 'b', 20, 4.1)
print(type(tuple_1))

# ! parenthesis are not mandotory
tuple_2 = 'a', 'b', 20, 4.1
print(type(tuple_2))

# ? A tuple with single element is a special case
tuple_3 = ('a') # equivalent to tuple_3 = 'a'
print(type(tuple_3))  # print str

# ||  creating a tuple with single  element
tuple_4 = ('a',) # equivalent to tuple_4 = 'a',
print(type(tuple_4))