class PurchaseProperty implements Property:
    def __init__(self, name, value, numberOfBedrooms, isNewHome, hasGarden, image, features, price):
        self.name = name
        self.value = value
        self.numberOfBedrooms = numberOfBedrooms
        self.isFlat = isFlat
        self.hasGarden = hasGarden
        self.image = image
        self.features = features
        self.price = price

    def get_price(self):
        return self.price

    def set_price(self, price):
        self.price = price