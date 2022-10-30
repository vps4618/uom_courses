import pandas as pd
import numpy as np

a_dict = {'1st': 1, '2nd': 3, '3rd': 5, '4th': 7, '5th': 9}
ser = pd.Series(a_dict)

print(ser[0:3])

# access index number
print(ser[1])

# access index label
print(ser['2nd'])
