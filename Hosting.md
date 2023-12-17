
# Deploying a Django project on PythonAnywhere
To host your Django project on PythonAnywhere for free, you can follow these steps:

## 1. Create an account on PythonAnywhere: 
- Go to [PythonAnywhere](https://www.pythonanywhere.com/) and sign up for a free account.
- RU: Перейдите на [PythonAnywhere](https://www.pythonanywhere.com/) и зарегистрируйтесь для бесплатного аккаунта.

## 2. Upload your code: 
- After logging in, go to the "Files" tab and upload your project files. You can also use the Bash console to clone your project if it's hosted on a Git repository.
- RU: После входа в систему перейдите на вкладку "Files" и загрузите файлы вашего проекта. Вы также можете использовать консоль Bash для клонирования проекта, если он размещен в репозитории Git.

## 3. Set up a virtual environment: 
- Go to the "Consoles" tab and start a new Bash console. Then, create a new virtual environment and install your project's dependencies. You can use the Pipfile and Pipfile.lock files in your project to do this.
- RU: Перейдите на вкладку "Consoles" и запустите новую консоль Bash. Затем создайте новую виртуальную среду и установите зависимости вашего проекта. Вы можете использовать файлы Pipfile и Pipfile.lock в вашем проекте для этого.


## 4. Configure the WSGI file: 
- Go to the "Web" tab and click on "Add a new web app". Follow the steps and choose "Manual configuration" (Python 3.8). In the "Code" section, go to the WSGI configuration file and modify it to point to your Django project. You can use the backend\backend\wsgi.py file in your project as a reference.

## 5. Set up the database: 
- In the "Databases" tab, you can set up a new database and configure it to work with your Django project. Update the DATABASES setting in your backend\backend\settings.py file to match the database credentials.

## 6. Start the web app: 
- Go back to the "Web" tab and click on "Reload" to start your web app.

- Remember to update the ALLOWED_HOSTS setting in your backend\backend\settings.py file to include your PythonAnywhere subdomain.

For more detailed instructions, you can refer to the [PythonAnywhere help pages](https://help.pythonanywhere.com/pages/DeployExistingDjangoProject/)