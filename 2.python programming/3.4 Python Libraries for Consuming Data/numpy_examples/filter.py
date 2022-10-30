import numpy as np

arr = np.array([1, 2, 3, 4])
print("Original array : ", arr)

a = [True, False, False, True]
b = arr[a]
print("Filtered array : ", b)
