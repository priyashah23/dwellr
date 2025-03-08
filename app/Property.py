from csv import DictReader

class Property:
    def __init__(self, id, name, value, numberOfBedrooms, isNewHome : bool, hasGarden, image, features, location):
        self.id = id
        self.name = name
        self.value = value
        self.numberOfBedrooms = numberOfBedrooms
        self.isNewHome = isNewHome
        self.hasGarden = hasGarden
        self.image = image
        self.features = features
        self.location = location


def render_property() -> Property:
    with open("data/listings.csv", 'r') as f:
        dict_reader = DictReader(f)
        list_of_dict = list(dict_reader)
        first_list = list_of_dict[0]
        print(first_list)
        return Property(first_list["listing_id"], None, first_list["pricing.price"], first_list["total_bedrooms"], None, None, first_list["feature_list"], None,)
 
def select_property():
    pass