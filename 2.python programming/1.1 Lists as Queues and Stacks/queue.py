
# ? First In First Out
# || Queues
print("queues")

# Implemeting queue using list
my_queue = []

# defining enqueue and dequeue functions


def enqueue(queue, value):
    queue.append(value)


def dequeue(queue):
    return queue.pop(0)


# Inserting values
print("Insertion")
enqueue(my_queue, "a")
enqueue(my_queue, "b")
enqueue(my_queue, "c")
print(my_queue)

print("\n")

# Deleting values
print("Deletion")
print(dequeue(my_queue))
print(my_queue)
print(dequeue(my_queue))
print(my_queue)
print(dequeue(my_queue))
print(my_queue)

# ! An application of queue
# 1.File Reading in computers