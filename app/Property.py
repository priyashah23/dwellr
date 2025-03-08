from csv import DictReader
import psycopg2

class Property:
    def __init__(self, id, name, value, numberOfBedrooms, isFlat, isNewHome, hasGarden, image, features, location):
        self.id = id
        self.name = name
        self.value = value
        self.numberOfBedrooms = numberOfBedrooms
        self.isFlat = isFlat
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
        return Property(first_list["listing_id"], None, first_list["pricing.price"], first_list["total_bedrooms"], None, None, first_list["feature_list"], None, None)

def select_property():
    connection = psycopg2.connect("data/listings.db")
    cur = connection.cursor()
    cur.execute("""
        SELECT *
        FROM listings
        WHERE total_bedrooms = %s
        AND pricing = %s
        AND feature_list = %s
        AND new_home = %s
        AND location = %s
        LIMIT 1
        """,
        (2, 500000, "garden", 1, "London"))
    connection.commit()
    property = cur.fetchall()
    print(property)