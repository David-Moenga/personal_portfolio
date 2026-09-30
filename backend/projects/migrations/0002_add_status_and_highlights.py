from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("projects", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="project",
            name="status",
            field=models.CharField(
                choices=[
                    ("completed", "Completed"),
                    ("in_progress", "In Progress"),
                    ("maintained", "Maintained"),
                ],
                default="completed",
                max_length=20,
            ),
        ),
        migrations.AddField(
            model_name="project",
            name="highlights",
            field=models.JSONField(blank=True, default=list),
        ),
    ]
