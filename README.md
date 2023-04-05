# SHOPSPOT - Ecommerce Website

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

Live URL : **[https://shopspot-shemil.vercel.app](https://shopspot-shemil.vercel.app)**


Built using React.js, Redux and Firebase as Database.


![home](https://github.com/shemilkumar/shopspot/blob/redux-thunk/src/assets/screenshots/shopspot-home.png)

![products](https://github.com/shemilkumar/shopspot/blob/redux-thunk/src/assets/screenshots/shopspot-products.png)

![product](https://github.com/shemilkumar/shopspot/blob/redux-thunk/src/assets/screenshots/shopspt-product.png)

## Technologies

* React JS
* Redux (State Management)
* Firebase as Database
* API integration (dummyjson)
* Tailwind CSS
* JavaScript, Axios
* Vite (development tool)
* Nodejs
* Git
* Jsx components
* Vercel (Hosting)

## Features Included
* Ability to buy products and sell products
* Product catalog browsing and search functionality
* Multiple filtering and sort functionality
* Product detail pages with multiple images, descriptions
* Shopping cart for adding and removing items
* Ability to post and delete your own products
* Search user functionality
* User account creation and login
* Instagram model profile page
* Responsive design for mobile devices
* Dark mode

# Usage

you have to setup firebase first and create firebase config 

firebase-config.js
```javascript
// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = 'you_have_to_setup_your_firebase_config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const userCollectionRef = collection(db, "users");
````

## Install Dependencies and Run

```
  npm install
  npm run start
```
* Version: 1.5.2
* License: MIT
* Author: Shemilkumar E A
