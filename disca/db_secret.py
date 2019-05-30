import os, sys


try:
    database_setting = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': os.environ["DISCA_DB_NAME"],
            'USER': os.environ["DISCA_DB_USER"],
            'PASSWORD': os.environ["DISCA_DB_PASS"],
            'HOST': os.environ["DISCA_DB_HOST"],
            'PORT': '5432',
        }
    }
except:
    database_setting = {}
