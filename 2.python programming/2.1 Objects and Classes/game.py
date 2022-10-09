class Warrior:

    def __init__(self, name, age):
        self.age = age
        self.name = name

    def lose_stick(self):
        print(f"{self.name} lost your stick")


class Monster:

    # class attributes
    color = "black"

    def __init__(self, age, name):
        # instance attributes
        self.age = age
        self.name = name

        # private attribute by convention
        self._is_innocent = None

    # instance method
    def steal(self, warrior):
        warrior.lose_stick()


vish_Warrior = Warrior("vish", 17)
hu_Monster = Monster(50, "hu")

hu_Monster.steal(vish_Warrior)

# creating an instance
monster1 = Monster(15, "mon1")

# accessing attributes
print(monster1.age)

# changing attributes value
monster1.age = 10

# creating another instance
monster2 = Monster(10, "mon2")
