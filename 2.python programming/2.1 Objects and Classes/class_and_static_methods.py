from datetime import date


class Monster:

    # class attributes
    color = "black"

    def __init__(self, age, name):
        # instance attributes
        self.age = age
        self.name = name

        self._is_innocent = None

    # instance method
    def steal(self, warrior):
        warrior.lose_stick()

    @classmethod
    def create_monster_from_birth_year(cls, year, name):
        return cls(date.today().year - year, name)

    @staticmethod
    def is_adult_Monster(age):
        return age > 18


monster_1 = Monster.create_monster_from_birth_year(2015, "vishwa")
print(monster_1.is_adult_Monster(16))
