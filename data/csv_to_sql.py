import pandas as pd
import sqlite3

# Read CSV file into a pandas DataFrame
df = pd.read_csv('pop_up_questions.csv')

# Connect to SQLite database (or create it)
conn = sqlite3.connect('pop_up_questions.db')

# Write the DataFrame to a SQLite table
df.to_sql('pop_up_questions', conn, if_exists='replace', index=False)

# Export the SQLite database to a SQL file
with open('pop_up_questions.sql', 'w') as f:
    for line in conn.iterdump():
        f.write('%s\n' % line)

# Close the connection
conn.close()
