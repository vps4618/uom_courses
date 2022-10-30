from cmath import nan
import pandas as pd


data = {
    "calories": [420, 380, 390],
    "duration": [50, 40, 45]
}

# load data into a dataframe object
df = pd.DataFrame(data)


# selection
print("\n select column")
print("--------------")
print(df["calories"])

print("\n select row by label")
print("--------------")
print(df.loc[1, "calories"])

print("\n select row by integer location")
print("--------------")
print(df.iloc[1])

print("\n slice rows")
print("--------------")
print(df[0:1])

print("\n select rows by boolean vector")
print("-------------------------------")
print(df[[True, False, True]])

# read csv file
print("\n read csv file")
print("--------------")
# df2 = pd.read_csv("readme.csv")
# print(df2.to_string())

# analysing data frames
print("\n analysing data frames")
print("-------------------------")
data1 = {
    "calories": [420, 380, 390, 5000],
    "duration": [50, 40, 45, 10]
}

# load data into a dataframe object
df1 = pd.DataFrame(data1)
print(df1.head(4))

# ! cleaning data with pandas

#  ? Handling Empty cells

# || remove rows with empty  cells
print("\n remove rows with empty cells")
print("-------------------------")
df3 = pd.DataFrame({
    "id": ['123X', '567V', '890M'],
    "module": ['Science', 'Maths', 'Arts'],
    "marks": [90, nan, nan]
})

# if we wantto  change original dataframe we can use inplace=True argument in dropna
cleaned_df3 = df3.dropna()
print(cleaned_df3)

# || replace empty values
print("\n replace empty values")
print("-------------------------")
cleaned_df3_2 = df3.fillna(88)
print(cleaned_df3_2)


# ? fixing data
print("\n fixing data")
print("-------------------------")
df4 = pd.DataFrame({
    "calories": [420, 300, 390],
    "duration": [50, 40, 45]
})

for x in df4.index:
    if df4.loc[x, "duration"] < 120:
        df4.loc[x, "duration"] = 120
print(df4)

# ? handle dupliactes
print("\n Handle duplicates")
print("---------------------")
df5 = pd.DataFrame({
    "teacher": ["Viraj Samaranayake", "Viraj Samaranayake", "Vimukthi Malshan", "Chathurika Madumali", "Manjula Wahalathanthrige", "Ravindu Bandaranayake"],
    "subjects": ["Physics", "Physics", "Combined Maths", "ICT", "Physics", "ICT"],
    "monthly payment value": ["Rs.2500", "Rs.2500", "Rs.3050", "Rs.2000", "Rs.2500", "Rs.2800"]
})
print(df5.duplicated())
df5.drop_duplicates(inplace=True)
print(df5)
