my_tuple = (15, 20, 96, 32, 17)

# || positive indices
print(my_tuple[0])
print(my_tuple[4])

# || negative indices
print(my_tuple[-2])
print(my_tuple[-3])

# || slicing
print(my_tuple[0:3])
print(my_tuple[3:5])

# * nested tuples
my_tuple_2 = ((1,2) , ('a','b'))
print(my_tuple_2[0][1]) # 2
print(my_tuple_2[1]) # (a,b)
