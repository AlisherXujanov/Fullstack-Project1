# Deploying a Django project on PythonAnywhere
To host your Django project on PythonAnywhere for free, you can follow these steps:

## 1. Create an account on PythonAnywhere: 
Go to [PythonAnywhere](https://www.pythonanywhere.com/) and sign up for a free account.
- RU: Перейдите на [PythonAnywhere](https://www.pythonanywhere.com/) и зарегистрируйтесь для бесплатного аккаунта.

## 2. Upload your code: 
After logging in, go to the "Files" tab and upload your project files. You can also use the Bash console to clone your project if it's hosted on a Git repository.
- RU: После входа в систему перейдите на вкладку "Files" и загрузите файлы вашего проекта. Вы также можете использовать консоль Bash для клонирования проекта, если он размещен в репозитории Git.

## 3. Set up a virtual environment: 
Go to the "Consoles" tab and start a new Bash console. Then, create a new virtual environment and install your project's dependencies. You can use the Pipfile and Pipfile.lock files in your project to do this.
- RU: Перейдите на вкладку "Consoles" и запустите новую консоль Bash. Затем создайте новую виртуальную среду и установите зависимости вашего проекта. Вы можете использовать файлы Pipfile и Pipfile.lock в вашем проекте для этого.


## 4. Configure the WSGI file: 
Go to the "Web" tab and click on "Add a new web app". Follow the steps and choose "Manual configuration" (Python 3.8). In the "Code" section, go to the WSGI configuration file and modify it to point to your Django project. You can use the [backend\backend\wsgi.py](backend\backend\wsgi.py) file in your project as a reference.

## 5. Set up the database: 
In the "Databases" tab, you can set up a new database and configure it to work with your Django project. Update the `DATABASES` setting in your [backend\backend\settings.py](backend\backend\settings.py) file to match the database credentials.

## 6. Start the web app: 
Go back to the "Web" tab and click on "Reload" to start your web app.

---
Remember to update the `ALLOWED_HOSTS` setting in your [backend\backend\settings.py](backend\backend\settings.py) file to include your PythonAnywhere subdomain.

For more detailed instructions, you can refer to the [PythonAnywhere help pages](https://help.pythonanywhere.com/pages/DeployExistingDjangoProject/)

---

# Configure WSGI File
To configure the WSGI file for hosting on PythonAnywhere, you can follow these steps:

1. After logging into PythonAnywhere, go to the Web tab.
2. Create a new web app or select your existing web app.
3. In the Code section, you'll find a link to the WSGI configuration file. Click on it.
4. In the WSGI configuration file, you'll see some default code. You need to modify this to point to your Django project.
5. Comment out the existing code and add the following:
```python
import os
import sys

path = '/home/YourPythonAnywhereUsername/YourProjectName'
if path not in sys.path:
    sys.path.append(path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'YourProjectName.settings'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```
Replace `YourPythonAnywhereUsername` with your PythonAnywhere username and `YourProjectName` with the name of your Django project.
---
Save the changes to the WSGI configuration file.
Go back to the Web tab and hit the Reload button.
Your Django app should now be live on PythonAnywhere.
---

# Configure HTTPS (SSL/TSL) for Django Project deployed on PythonAnywhere
To configure HTTPS (SSL/TLS) for your Django project deployed on PythonAnywhere, you can follow these steps:
- RU: Чтобы настроить HTTPS (SSL / TLS) для вашего проекта Django, развернутого на PythonAnywhere, вы можете выполнить следующие шаги:

## 1. Obtain a SSL Certificate: 
You can get a free SSL certificate from Let's Encrypt. PythonAnywhere has a built-in tool to do this. Go to the "Web" tab, scroll down to the "Security" section, and click on the "Enable HTTPS" button. Follow the instructions to get a certificate from Let's Encrypt.
- RU: Вы можете получить бесплатный SSL-сертификат от Let's Encrypt. PythonAnywhere имеет встроенный инструмент для этого. Перейдите на вкладку "Web", прокрутите вниз до раздела "Безопасность" и нажмите кнопку "Включить HTTPS". Следуйте инструкциям, чтобы получить сертификат от Let's Encrypt.

## 2. Configure PythonAnywhere to Use the SSL Certificate: 
After obtaining the certificate, PythonAnywhere should automatically configure your web app to use it. If not, you can manually specify the paths to the certificate and private key files in the "Security" section of the "Web" tab.
- RU: После получения сертификата PythonAnywhere автоматически настроит ваше веб-приложение для его использования. Если нет, вы можете вручную указать пути к файлам сертификата и закрытого ключа в разделе "Безопасность" вкладки "Веб".

## 3. Update Django Settings: 
In your Django settings file ([settings.py](backend\backend\settings.py)), set the **SECURE_PROXY_SSL_HEADER** setting to tell Django that it's being served over HTTPS, even though the request to the PythonAnywhere server is over HTTP.
- RU: В файле настроек Django ([settings.py](backend\backend\settings.py)) установите параметр **SECURE_PROXY_SSL_HEADER**, чтобы сообщить Django, что он работает по протоколу HTTPS, даже если запрос к серверу PythonAnywhere выполняется по протоколу HTTP.
```bash
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
```

## 4. Reload Your Web App: 
Finally, go back to the "Web" tab in PythonAnywhere and click on "Reload" to apply your changes.
- RU: Наконец, вернитесь на вкладку "Web" в PythonAnywhere и нажмите "Reload", чтобы применить ваши изменения.

---

Remember, using HTTPS is important for security, especially if your site handles sensitive data. It also helps with SEO and can improve your site's ranking in search results.
- RU: Помните, что использование HTTPS важно для безопасности, особенно если ваш сайт обрабатывает конфиденциальные данные. Это также помогает с SEO и может улучшить рейтинг вашего сайта в результатах поиска.

---

# Collect Static Files

To configure static files for your Django project on PythonAnywhere, follow these steps:
  - RU: Чтобы настроить статические файлы для вашего проекта Django на PythonAnywhere, выполните следующие действия:
  

## 1. Collect static files: 
Run the `collectstatic` command in your Django project. This command collects all static files from your applications and places them into a single folder specified by the `STATIC_ROOT` setting in your Django settings file.
- RU: Запустите команду `collectstatic` в вашем проекте Django. Эта команда собирает все статические файлы из ваших приложений и помещает их в одну папку, указанную в настройках `STATIC_ROOT` в файле настроек Django.
```bash
python manage.py collectstatic
```

## 2. Configure static files on PythonAnywhere: 
Go to the "Web" tab on PythonAnywhere and scroll down to the "Static files" section. Click on the "Add a new static file" button.
- RU: Перейдите на вкладку "Web" в PythonAnywhere и прокрутите вниз до раздела "Статические файлы". Нажмите кнопку "Добавить новый статический файл".

## 3. Fill in the static files form: 
In the form that appears, fill in the following fields:
- RU: В появившейся форме заполните следующие поля:

  - **URL**: This should be the URL that you want to serve your static files from. Typically, this is `/static/`.
  - **Directory**: This should be the path to the directory where you collected your static files (i.e., your `STATIC_ROOT`).



## 4. Reload your web app: 
After saving your changes, click on the "Reload" button at the top of the "Web" tab to apply your changes.
- RU: После сохранения изменений нажмите кнопку "Reload" в верхней части вкладки "Web", чтобы применить изменения.

---

Now, PythonAnywhere will serve your static files at the URL you specified.
- RU: Теперь PythonAnywhere будет обслуживать ваши статические файлы по указанному вами URL-адресу.



# Configure Virtual Environment
Please note that PythonAnywhere doesn't support Pipfile.lock, so you might need to generate a requirements.txt file from your Pipfile. You can do this using the following command:

`pipenv lock -r > requirements.txt` - is outdated
🎯 New version is: `pipenv run pip freeze > requirements` txt