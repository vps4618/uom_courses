import numpy as np

arr  = np.array([1,1,2,3,4,1])
print("Original array : ",arr)

a = np.where(arr==1)
print("Index of element 1 : ",a)
