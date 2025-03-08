class RentalProperty implements Property:
    def __init__(self, name, value, numberOfBedrooms, isNewHome, hasGarden, image, features, rent):
        self.name = name
        self.value = value
        self.numberOfBedrooms = numberOfBedrooms
        self.isFlat = isFlat
        self.hasGarden = hasGarden
        self.image = image
        self.features = features
        self.rent = rent

    def get_rent(self):
        return self.rent

    def set_rent(self, rent):
        self.rent = rent