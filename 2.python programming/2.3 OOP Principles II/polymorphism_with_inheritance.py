
# ?  parents and child have different features
class WalkingStick:
    pass


class Warrior():
    def __init__(self, age, name):
        self.age = age
        self.name = name
        self.is_mobile = True
        self.stick = WalkingStick()

    def walk(self):
        while self.is_mobile:
            print("walking")


class SuperWarrior(Warrior):
    def fight(self):
        pass

    def walk(self):
        while self.is_mobile:
            print("Walking without rest !")


class NormalWarrior(Warrior):

    def walk(self):
        while self.is_mobile:
            print("Need rest while walking !")


warrior = Warrior(17, "vish")
sup_warrior = SuperWarrior(18, "ash")
nor_warrior = NormalWarrior(20, "gho")

warrior.walk() # walking
sup_warrior.walk() # walking without rest
nor_warrior.walk() # need rest while walking
