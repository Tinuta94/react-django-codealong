from django.urls import include, path                    
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
#this is like app.use from server.js
router.register('issue', views.IssueViewSet)
router.register('user', views.UserViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]