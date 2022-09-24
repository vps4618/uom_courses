# || Add a element to the set
# ! When duplicate elements adding,they will be ignored
numbers_set_1 = {"one","two","three"}
numbers_set_1.add("four")
print(numbers_set_1)

# || Add multiple elements to the set 
numbers_set_2 = {"one","two","three","four","five"}
numbers_set_2.update(["six","seven","eight"])
print(numbers_set_2)