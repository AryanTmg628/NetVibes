from typing import Any, Dict

import requests

from domain.config import API_KEY


class DomainServices:

    def searchDomain(self, domain_name: str) -> dict[str, Any] | None:

        url = "https://whoisjson.com/api/v1/whois"

        querystring = {"domain": f"{domain_name}"}

        headers = {"Authorization": f"Token={API_KEY}"}

        response = requests.request(
            "GET", url, headers=headers, params=querystring, timeout=10
        )

        if response:
            return response.json()

        return None
