
# ? Last In First Out

# || Stacks
print("stacks")

# implementing a stack using list
my_stack = []

# defining push and pop functions


def push(stack, value):
    stack.append(value)


def pop(stack):
    return stack.pop()


# inserting values to stack
print("insertion")
push(my_stack, "a")
push(my_stack, "b")
push(my_stack, "c")
print(my_stack)

# deleting values
print("deletion")
print(pop(my_stack))
print(my_stack)
print(pop(my_stack))
print(my_stack)
print(pop(my_stack))
print(my_stack)

# ! An applications of stacks
# 1.UNDO function
