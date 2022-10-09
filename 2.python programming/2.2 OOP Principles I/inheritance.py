class WalkingStick:
    pass


class Binoculars:
    pass


class Warrior:
    def __init__(self, age, name):
        self.age = age
        self.name = name
        self.is_mobile = True
        self.stick = WalkingStick()

    def walk(self):
        while self.is_mobile:
            print('Walking')

    def lose_stick(self):
        self.stick = None
        self.is_mobile = False


class SuperWarrior(Warrior):
    def __init__(self, age, name):
        # super warrior has its own constructor but it also has warrior class properties
        super().__init__(age, name)
        self.binoculars = Binoculars()

    # method overiding
    def walk(self):
        while self.is_mobile:
            print("Walk with no rest")

    def fight(self):
        pass


class NormalWarrior(Warrior):
    # normal warrior also have warrior class properties
    def rest(self,rest_time = None):
        if rest_time is not None:
            print("Rest only for {}".format(rest_time))
        else:
            print("Rest a lot")



super_warrior_1 = SuperWarrior(12, "hi")
print(super_warrior_1.name)
# super_warrior_1.walk()

normal_warrior_1 = NormalWarrior(20, "vish")
# method overloading # default values in method help to method overloading
normal_warrior_1.rest()
normal_warrior_1.rest(10)
