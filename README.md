# E-Commerce Back End

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  A MySQL database and application back end for an e-commerce site. This was built using MySQL2, Express, Sequelize and dotenv.

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Questions](#Questions)
  - [License](#License)

  ##
  
  ## Installation
  To install the project follow the steps below:
  
- Git clone the repository with either HTTP or SSH
```bash
git clone
```

- Install the necessary dependencies 
```bash
npm install
```

  ## Usage
  Run the following command at the root of your project:
  
 ```bash
 mysql -u root -p
 ```
 - And enter your MySQL password
 
 - Then build the database with:

```bash
source db/schema.sql
```

- Then quit MySQL with:
```bash
quit
```

- Then seed your database with the sample data with:

```bash
npm run seed
```

- Then start the server with either:
```bash
npm start
```
or
```bash
node server
```

### Watch a walkthrough video [here](https://drive.google.com/file/d/1LesXHuNrbcs8l2zMsp7MRp8yATm8MGxk/view?usp=sharing).

Below are some screen shots of the GET requests in action
<img width="1920" alt="get_categories" src="https://user-images.githubusercontent.com/47282257/168897906-b98435d6-bbf8-46d4-80b9-14e7e9cdfd5c.png">
<img width="1920" alt="get_products" src="https://user-images.githubusercontent.com/47282257/168897927-0811d673-8248-4171-a717-6bbf9f90f242.png">
<img width="1920" alt="get_tags" src="https://user-images.githubusercontent.com/47282257/168897938-0895ae06-d333-42c2-a5a8-7295550d3527.png">

  ## Contribution
  No contributions are necessary at this time.

  ## Questions
  Check out other projects I have built: [Github](https://github.com/ianaack)
  
  Or reach me directly for additional questions: ianaack@gmail.com

  ## License
  This project is covered under the MIT License.
