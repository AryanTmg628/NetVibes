from random import randint

from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from premailer import transform

from server.config import COMPANY_NAME


class EmailServices:
    """
    Email services
    """

    def generate_verification_code(self, number_of_digit: int) -> int:
        """
        It generates the random verification code on the basis of number_of_digits
        """
        lower_bound = 10 ** (number_of_digit - 1)
        upper_bound = (10**number_of_digit) - 1
        random_verification_code = randint(lower_bound, upper_bound)
        return random_verification_code

    def send_verification_code(
        self,
        first_name: str,
        to_address: str,
        verification_code: int,
        from_address: str,
    ) -> bool:

        try:

            subject = f"{COMPANY_NAME} verification code."
            html_message = render_to_string(
                "email_templates/verification_code.html",
                {
                    "user": first_name,
                    "verification_code": verification_code,
                    "company_name": COMPANY_NAME,
                },
            )

            html_message = transform(html_message)

            plain_message = strip_tags(html_message)
            from_email = from_address
            to_email = to_address

            email = EmailMultiAlternatives(
                subject=subject,
                body=plain_message,
                from_email=from_email,
                to=[to_email],
            )
            email.attach_alternative(html_message, "text/html")
            email.send()
            return True

        except Exception as e:
            print(e)
            return False
