import json
import pandas as pd

# Load JSON data from a file
with open('../../hackathon_listings_final.json') as f:
    data = json.load(f)

# Normalize the nested JSON data
listings = pd.json_normalize(data['listings-json-data'])

# Create a pandas DataFrame
listings_df = pd.DataFrame(listings)

listings_df.to_csv('listings.csv', index=False)