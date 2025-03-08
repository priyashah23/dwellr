import pandas as pd

# Create a DataFrame with a column called 'question'
data = {'question': ["Do you drive?", "Do you have kids of school age?", "Do you like sports?", "Do you like a pub quiz?", "Do you like a Dominos?"]}
df = pd.DataFrame(data)

# Save the DataFrame to a CSV file
df.to_csv('pop_up_questions.csv', index=False)