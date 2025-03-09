from PurchaseProperty import PurchaseProperty

class Preferences:
    def __init__(self, max_price: int, number_of_beds: int, is_new_home: bool, location: str):
        self.max_price = max_price
        self.number_of_beds = number_of_beds
        self.is_new_home = is_new_home
        self.location =  location