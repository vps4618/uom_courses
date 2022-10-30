import numpy as np

# slicing
arr4 = np.array([1, 2, 3, 4, 5, 6, 7])
print("arr4  1:5  -> "+str(arr4[1:5]))

arr5 = np.array([[11, 12, 13, 14, 15],
                 [16, 17, 18, 19, 20],
                 [21, 22, 23, 24, 25],
                 [26, 27, 28, 29, 30],
                 [31, 32, 33, 34, 35]])
print("\n")
print(arr5)

print("\n")
print(arr5[0, 1:4])

print(arr5[1:4, 0])

print(arr5[::2, ::2])