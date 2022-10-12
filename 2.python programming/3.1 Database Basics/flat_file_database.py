import csv

# global variables
current_ID = 1

new_additions = []

toUpdate_items = []

wantToDelete_items = []

filename = "library.csv"

fields = ['ID', 'Title', 'Author', 'Genre', 'Year', 'Location']

data = []

with open(filename, 'r') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        data.append(dict(row))
if len(data) > 0:
    current_ID = data[-1].get("ID")
    current_ID = int(current_ID) + 1


# add new record


def addRecord():
    global current_ID
    new_record = {
        "ID": str(current_ID),
        "Title": input("What is the title of the book? >"),
        "Author": input("What is the author's first name?  >"),
        "Genre": input("What genre is the book?  >"),
        "Year": input("What year was the book released?  >"),
        "Location": input("Where is the book? > ")
    }
    new_additions.append(new_record)
    # appending new records to library.csv
    if len(new_additions) > 0:
        with open(filename, 'a', newline='') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fields)
            # writer.writeheader()
            for item in new_additions:
                writer.writerow(item)
    for i in range(len(data)):
        data.pop()
    with open(filename, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(dict(row))
    current_ID = current_ID + 1
    print("-"*15)
    print("----------------------------")
    print("New Record added successfully!")
    print("----------------------------")


# show all data


def displayData():
    for item in fields:
        print("  "+"%-20s" % item, end='')
    print('\n')

    for item in fields:
        print("  "+"%-20s" % "---", end='')

    print("\n")
    for row in data:
        for key, val in row.items():
            print("  "+"%-20s" % val, end='')
        print("\n")


# search data
def searchData():
    # Search the data
    search_term = input("What would you like to search for?").lower()
    if search_term=="" or search_term==" ":
        print("----------------------------")
        print("Please enter valid keyword ! ")
        print("----------------------------")
        return 
    results = []
    for row in data:
        for key, val in row.items():
            if search_term in val.lower():
                results.append(row)

    # Display the results
    if len(results) > 0:
        for item in fields:
            print("  "+"%-20s" % item, end='')
        print('\n')

        for item in fields:
            print("  "+"%-20s" % "---", end='')
        print("\n")
        for item in results:
            for key, val in item.items():
                print("  "+"%-20s" % val, end='')
            print("\n")
    else:
        print("----------------------------")
        print("Sorry no records found")
        print("----------------------------")


# update data
def updateData():
    ID = input("Enter ID of the book you want to update : ")
    for row in data:
        for key, val in row.items():
            if key == "ID" and val == ID:
                toUpdate_items.append(row)
                try:
                    index = data.index(row)
                except:
                    pass
    if len(toUpdate_items) == 0:
        print("----------------------------")
        print("No items related to this ID.")
        print("----------------------------")

    else:
        Title = input("Enter new Title : ")
        Author = input("Enter new Author : ")
        Genre = input("Enter new Genre : ")
        Year = input("Enter new Year : ")
        Location = input("Enter new Location : ")
        toUpdate_items.pop()
        toUpdate_items.append({"ID": ID, "Title": Title, "Author": Author,
                              "Genre": Genre, "Year": Year, "Location": Location})
        data.pop(index)
        data.append(toUpdate_items[0])
        toUpdate_items.pop()

        with open(filename, 'w', newline='') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fields)
            writer.writeheader()
            for item in data:
                writer.writerow(item)
        print("----------------------------")
        print("Item updated successfully")        
        print("----------------------------")

# delete data
def deleteData():
    ID = input("Enter ID of the book you want to delete : ")
    for row in data:
        for key, val in row.items():
            if key == "ID" and val == ID:
                wantToDelete_items.append(row)
                try:
                    index = data.index(row)
                except:
                    pass
    if len(wantToDelete_items) == 0:
        print("----------------------------")
        print("No items related to this ID.")
        print("----------------------------")
    else:
        data.pop(index)
        with open(filename, 'w', newline='') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fields)
            writer.writeheader()
            for item in data:
                writer.writerow(item)
        print("----------------------------")        
        print("Item deleted successfully !")
        print("----------------------------")
# execute the code
print("------Welcome to the Python Library organiser------")

choice = ""

while choice.lower() != "x":
    print("""What would you like to do?
    1 - Add a book
    2 - Display your Books
    3 - Search for a Book
    4 - Update a book details
    5 - Delete a book""")

    choice = input(">")

    if choice == "1":
        # Code to add a record
        addRecord()

    elif choice == "2":
        # Display the data
        displayData()

    elif choice == "3":
        # Search the data
        searchData()
    elif choice == "4":
        # update date
        updateData()
    elif choice == "5":
        # delete a book
        deleteData()    

    elif choice.lower() == "x":
        print("----------------------------")
        print("Thank you! Shutting down.")
        print("----------------------------")
    else:
        print("----------------------------")
        print("Sorry, I didnt recognise that option")
        print("----------------------------")
