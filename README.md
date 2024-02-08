# Find My Way

## Description
Find My Way is a dynamic web application built using Node.js, a powerful JavaScript runtime, renowned for its efficiency and scalability in building server-side applications. Leveraging the Express.js framework, the website ensures rapid development and robust routing capabilities, enabling seamless navigation and efficient handling of HTTP requests.

In addition to its server-side prowess, Find My Way utilizes HTML, CSS, and JavaScript on the client side to deliver a visually appealing and interactive user experience. The frontend is crafted with a combination of modern web technologies, ensuring compatibility across various devices and browsers.

For data storage and retrieval, Find My Way employs MongoDB, a flexible and scalable NoSQL database, ideal for managing diverse datasets with ease. MongoDB's document-based structure allows for efficient storage and retrieval of information, enabling seamless integration with Node.js applications.

Furthermore, Find My Way incorporates various libraries and packages from the Node.js ecosystem to enhance functionality and streamline development. These may include but are not limited to:
- Node.js: Version 20.0.0 or higher, providing the runtime environment for server-side JavaScript execution.
- Express: A minimalist web application framework for Node.js, facilitating the creation of robust and scalable web applications and APIs.
- EJS: A simple and flexible templating engine for rendering dynamic HTML content on the server side.
- MongoDB: A NoSQL database solution used for storing and managing structured data, offering flexibility and scalability for web applications.
- Mongoose: An elegant MongoDB object modeling tool for Node.js, providing a schema-based solution to interact with MongoDB databases.
- Tailwind CSS: Version 3.4.1, a utility-first CSS framework for creating custom designs and responsive layouts with minimal CSS code.


## Tech stack
> - NodeJs >=20.0.1
> - Tailwind CSS >=3.0.0
> - Ejs
> - Mongoose 8
> - MongoDB

## Installation
1. Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Clone the repository:
   ```bash
   git clone https://github.com/your-username/find-my-way.git](https://github.com/Harsh-nodejs/Project-App.git)https://github.com/Harsh-nodejs/Project-App.git
   cd Project-App
   ```

3. Install the node js depedencies from package.json :
   ```bash
   npm install
   ```

4. After the packages are installed , we can run the server on local host. but first we need a config file with your mongoDb instance.
   > Change extention of config to config.env and fill the required <DATA>
   
5. After configuring the config file and setting up MongoDB use can use the dummy data in >> ./public/Dev-utils/DB data for testing or Demo/ 

   ```
   .
   └── Project-App/
       ├── public/
       │   └── Dev-util/
       │       └── DB data for testing or Demo/
       │           ├── findmyway.articles.json
       │           ├── findmyway.jobs.json
       │           └── findmyway.users.json
       ├── routes
       ├── utils
       ├── controller
       ├── models
       └── etc.......
   ```
6. Now you can run the project useing the following commands:
   ```bash
   npm run start
   ```

   
# Screenshots
 **Landing Page**
> ![image](https://github.com/Harsh-nodejs/Project-App/assets/153886419/8d31d909-a6b5-42fd-a0e3-44bf827011da)

 **Blog page**
> ![image](https://github.com/Harsh-nodejs/Project-App/assets/153886419/3064f3b0-97b9-4f1f-9464-2903db47c625)
> ![image](https://github.com/Harsh-nodejs/Project-App/assets/153886419/3bfabd6d-dcf9-40e0-b31e-de9d1cc76225)

 **Jobs Page**
> ![image](https://github.com/Harsh-nodejs/Project-App/assets/153886419/b554f2ff-74d2-42f9-9ffe-25317185c7b8)
> ![image](https://github.com/Harsh-nodejs/Project-App/assets/153886419/625ba43f-ea9c-48d0-85a5-483eec50be65)

 **User menu**
> ![image](https://github.com/Harsh-nodejs/Project-App/assets/153886419/e0846f47-5de8-4bae-9c01-3c4d22df139c)

 **Login Page**
> ![image](https://github.com/Harsh-nodejs/Project-App/assets/153886419/386722df-255a-4fcc-bc59-9e98a2d26c46)

**Signup Page**
> ![image](https://github.com/Harsh-nodejs/Project-App/assets/153886419/870626d4-86ff-4bbf-a4f5-c315d8cb874a)

 **Sidebar Nav**
> ![image](https://github.com/Harsh-nodejs/Project-App/assets/153886419/0e6185e1-7655-477b-80c7-056b86da0619)

 ## Error Page
 > ![image](https://github.com/Harsh-nodejs/Project-App/assets/153886419/cf479355-cacc-48db-91f2-d663ec4274ce)

   ## Mobile port 
