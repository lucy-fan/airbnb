# Rubric-file-structure
File structure for iX Full stack Project 

## Project Setup

### Create Project Via CLI

Navigate to the project file

```bash
cd Rubric-file-structure
cd Admin Panel
```
Create project

```bash
ng new admin-panel
```
Do the same for projects:

Consumer Mobile App

```bash
ionic start consumer-mobile-app
```

Provider Mobile App

```bash
ionic start provider-mobile-app
```

API

Create file structure with server.js located in a folder called api

```bash
mkdir api
cd api 
npm init
```

### Project Structure 

Generate a mark down table similar to the one in root directory of this project. The following website can be used to do https://www.tablesgenerator.com/markdown_tables or edit the Project File Structure.txt file in the root directory

Only files included in this mark down table with be marked!

Ensure that the files included in the mark down table related the sections specified in the table.

Please include the mark down table in the README.md file in the root directory of the project.

### Example of Project Structure 

| PROJECT             | COMPONENT          | FILE NAMES                                                                                                                                                                              |
|---------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Consumer mobile app | Login              | airbnb\consumer-mobile-app\src\app\login            |
| Consumer mobile app | Registration       | airbnb\consumer-mobile-app\src\app\register  |
| Consumer mobile app | User Profile       | airbnb\consumer-mobile-app\src\app\profile                  |
| Consumer mobile app | List of Properties | airbnb\consumer-mobile-app\src\app\listings      |
| Provider mobile app | Login              | airbnb\provider-mobile-app\src\app\login               |
| Provider mobile app | Registration       | airbnb\provider-mobile-app\src\app\register  |
| Provider mobile app | User Profile       | airbnb\provider-mobile-app\src\app\profile                 |
| Provider mobile app | List of Properties | airbnb\provider-mobile-app\src\app\listings      |
| Provider mobile app | List of Bookings   | airbnb\provider-mobile-app\src\app\bookings          |
| Admin Panel         | Users              | airbnb\admin-panel\src\app/components\user                                 |
| Admin Panel         | Listings           | airbnb\admin-panel\src\app/components\listings                                  |
| Admin Panel         | Bookings           | airbnb\admin-panel\src\app/components\bookings                                  |
| API                 | Routes             | airbnb\API\src\api                                                        |
| API                 | Services           | airbnb\API\src\services |
| API                 | Models             | airbnb\API\src\models |
### Change Git Remote URL

Create new repository on GitHub.

Change the git URL associated with the project 

```bash
git remote set-url origin < new URL of your GitHub project (click 'Clone or download' button on GitHub site to see URL) >
```

Ensure that the git URL has been updated.

```bash
git remote -v
```

