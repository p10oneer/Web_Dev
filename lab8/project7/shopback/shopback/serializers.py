from rest_framework.serializers import ModelSerializer

from .models import Product

class CompanySerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = (
            'name', 'price', 'description', 'count', 'is_active'
        )