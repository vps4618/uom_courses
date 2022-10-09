class Warrior:
    def __init__(self, name):
        # instance attributes
        self.name = name
        # private by convention
        self._age = 0

    # using property decorator
    # getter function
    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, age):
        if age > 0:
            self._age = age
        else:
            print("Age should be greater than zero")


# creating an instance
warrior = Warrior("worr1")

warrior.age = -5
# Age should be greater than zero
print(warrior.age)
# 0

warrior.age = 15
print(warrior.age)
# 15

# ? Encapsulation allows adding some logic when accessing the client's data
# ? Eg: - validation on modifying a property value

# ? Hiding implementation details reduces complexity, thus easier maintenance
warrior.stick = "magic wand"

print(warrior.stick)
