import sys

# 1.tuples are memory efficient than lists
my_list = [1,2,3,4,5]
my_tuple = (1,2,3,4,5)
print(sys.getsizeof(my_list))
print(sys.getsizeof(my_tuple))

# Where to use tuples
#  Use tuples when there is no need change values in future