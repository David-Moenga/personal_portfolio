from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from projects.views import ProjectViewSet
from experience.views import ExperienceViewSet
from skills.views import SkillViewSet
from education.views import EducationViewSet
from certifications.views import CertificationViewSet
from blog.views import PostViewSet
from contact.views import ContactMessageCreateView

router = DefaultRouter()
router.register("projects", ProjectViewSet)
router.register("experience", ExperienceViewSet)
router.register("skills", SkillViewSet)
router.register("education", EducationViewSet)
router.register("certifications", CertificationViewSet)
router.register("posts", PostViewSet, basename="post")
urlpatterns = [path("admin/", admin.site.urls), path("api/", include(router.urls)), path("api/contact/", ContactMessageCreateView.as_view(), name="contact")]
