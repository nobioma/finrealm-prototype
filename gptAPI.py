import os 
import openai
from openai import OpenAI

# Set environment variables
my_api_key = os.getenv('CHAT_KEY')
print(my_api_key)

openai.api_key = my_api_key


# WRITE YOUR CODE HERE
# Create an OpenAPI client using the key from our environment variable
client = OpenAI(
    api_key=my_api_key,
)

# Specify the model to use and the messages to send
completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a financial advisor who is helping people learn about finance. However, these people aren't very experienced in finance, so explain everything in an easy to understand way. Also, keep each response to 50 words or less."},
        {"role": "user", "content": "What should I pair with this yellow soccer jersey and this white bandana?"}
    ]
)
print(completion.choices[0].message.content)
