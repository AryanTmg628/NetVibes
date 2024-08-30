from typing import Any, Dict

import requests

from domain.config import API_HOST, API_KEY, WHOIS_ENDPOINT


class DomainServices:

    def searchDomain(self, domain_name: str) -> dict[str, Any] | None:

        url = f"{API_HOST}{WHOIS_ENDPOINT}?"

        querystring = {"domain": domain_name}

        headers = {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "domain-checker7.p.rapidapi.com",
        }

        response = requests.get(
            url, headers=headers, params=querystring, timeout=10
        )  # 10seconds
        if response:
            return response.json()
        return None
