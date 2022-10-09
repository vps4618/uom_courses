from abc import ABC, abstractmethod


class WalkingStick:
    pass


class Warrior(ABC):
    def __init__(self, age, name):
        self.age = age
        self.name = name
        self.is_mobile = True
        self.stick = WalkingStick()

    @abstractmethod
    def walk(self):
        pass


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


war = NormalWarrior(17, "fyf")
war.walk()
