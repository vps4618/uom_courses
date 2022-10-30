import numpy as np

# reshape array
arr1 = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
newarr = arr1.reshape(-2)
print(newarr)

# order in reshape
arr2 = np.array([[3, 12, 5], [7, 1, 9]])
print(arr2)
# order is fixed
arr3 = arr2.reshape(6, order="F")
print(arr3)
