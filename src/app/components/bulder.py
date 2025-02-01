# Product Class
class House:
    def __init__(self, foundation, structure, roof, has_garage):
        self.foundation = foundation
        self.structure = structure
        self.roof = roof
        self.has_garage = has_garage

    def __str__(self):
        return (f"House [Foundation={self.foundation}, "
                f"Structure={self.structure}, Roof={self.roof}, "
                f"Garage={'Yes' if self.has_garage else 'No'}]")

# Builder Class
class HouseBuilder:
    def __init__(self):
        self.foundation = None
        self.structure = None
        self.roof = None
        self.has_garage = False  # Default value

    def set_foundation(self, foundation):
        self.foundation = foundation
        return self  # Returning self enables method chaining

    def set_structure(self, structure):
        self.structure = structure
        return self

    def set_roof(self, roof):
        self.roof = roof
        return self

    def set_garage(self, has_garage):
        self.has_garage = has_garage
        return self

    def build(self):
        return House(self.foundation, self.structure, self.roof, self.has_garage)

# Client Code
if __name__ == "__main__":
    house = (HouseBuilder()
             .set_foundation("Concrete")
             .set_structure("Wood")
             .set_roof("Tiles")
             .set_garage(True)
             .build())

    print(house)
