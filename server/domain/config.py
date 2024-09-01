from os import getenv

from dotenv import load_dotenv

load_dotenv()


API_KEY = getenv("RAPIDAPI_KEY")
API_HOST = getenv("RAPIDAPI_HOST")

WHOIS_ENDPOINT = "/whois"
