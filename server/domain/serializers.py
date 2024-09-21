from rest_framework.serializers import ModelSerializer

from domain.models import TLD


class TLDSerializer(ModelSerializer):

    class Meta:
        model = TLD
        fields = "__all__"
