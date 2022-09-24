
# || remove() -> remove a specific element
# ? Will raise an error if the item is not present in the set
fruits_set = {"mango", "apple", "orange"}
try:
    fruits_set.remove("grapes")  # raise a error
except Exception as e:
    print(e)
fruits_set.remove("mango")
print(fruits_set)

# || discard() -> remove an  element
# ? Will not raise an error if the item is not present in the set
fruits_set_2 = {"mango", "apple", "orange", "grapes"}
fruits_set_2.discard("banana")  # will not raise a error
fruits_set_2.discard("mango")
print(fruits_set_2)

# || pop() -> remove a random element from a set
fruits_set_3 = {"woodapple", "roseapple", "strawberries"}
fruits_set_3.pop()
print(fruits_set_3)
