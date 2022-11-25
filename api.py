import requests

# Client ID required to access API -- found in API section of MAL settings
CLIENT_ID = '361013d5116f39ff6dcaac63e96d40b7'

# The url points to the anime based on the ID, here "40748" is the ID for JJK
url = 'https://api.myanimelist.net/v2/anime/40748?fields=num_episodes'

response = requests.get(url, headers = {
    'X-MAL-CLIENT-ID': CLIENT_ID
    })

response.raise_for_status()
anime = response.json()
response.close()

print(anime['num_episodes'])
