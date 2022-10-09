
class WalkingStick:
    pass
# ? operate differently in different objects
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
            print("Can walk without need for rest")


class NormalWarrior(Warrior):

    def walk(self):
        while self.is_mobile:
            print("Need a rest time to time while walking")


def check_walking_style(obj):
    obj.walk()

sup_warrior = SuperWarrior(17,"vish")
warrior = NormalWarrior(20,"do")

check_walking_style(sup_warrior) # Can walk without need for rest
check_walking_style(warrior) # Need a rest time to time while walking