from django.views.generic import TemplateView


class TriggersTemplateView(TemplateView):
    template_name = "home_vue.html"


class VueTemplateView(TemplateView):
    template_name = "base_vue.html"


class VueTestTemplateView(TemplateView):
    template_name = "test.html"
