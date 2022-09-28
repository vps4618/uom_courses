# A list of names with possible duplicate entries is given
# Find the unique names and the number of times each name appears in the list

names = ["Amal",
         "Kamal",
         "Sunil",
         "Saman",
         "Amal",
         "Amal",
         "Saman",
         "Nimal",
         "Kamal",
         "Ajith",
         "Kamal",
         "Saman",
         "Nimal",
         "Kamal",
         "Sunil",
         "Sarath"]

counts = dict()  # create empty dictionary

for name in names:  # iterate through the names list
    if name not in counts:  # checking if the name is already in the dict
        counts[name] = 1  # add new element to the dict with value 1
    else:
        counts[name] = counts[name] + 1  # Increment the value by 1
print(counts)  # Finally print the dict
