# React Cart & Product Management

A fully functional shopping cart interface built with React (Vite) and Tailwind CSS v4, using Context API and useReducer for global state management.

# Live Demo

- Live Site (https://shopping-cart91.netlify.app/)  


# Features

```md
1. React + Vite setup
2. Tailwind CSS v4 styling
3. Dummy product listing from local array
4. Dynamic "Add to Cart" / "Remove from Cart" buttons
5. Stock management logic with real-time updates
6. Cart quantity control (+ / - buttons)
7. Auto subtotal, discount (20%), delivery fee & total calculation
8. Cart item deletion with quantity restore
9. Product sorting: Popularity, Newest, Price
10. Live product search by title
11. Context API + useReducer based global state management

```


# Tech Stack

React (Vite)
JavaScript (ES6+)
Tailwind CSS v4
Context API
useReducer


## 📁 Project Structure
```md

src/
├── assets/
|
├── components/
|   |
│   ├── Announcement/
│   │   └── AnnouncementBar.jsx
|   |
│   ├── Button/
│   │   └── Button.jsx
|   |
│   |── Footer/
|   |   └── Footer.jsx
|   |
|   |──Header /
|   |  |── Header.jsx
|   |  |── NavItem.jsx
|   |  └── SearchBar.jsx
|   |
|   |── NewsLetter /
|   |   └── NewsLetter.jsx
|   |
|   └── Shop /
|       |
|       |── Cart
|       |   |── Cart.jsx
|       |   |── CartItem.jsx
|       |   └── OrderSummary.jsx
|       |
|       |── Product
|       |   |──ProductCart.jsx
|       |   |── ProductList.jsx
|       |   └── Rating.jsx
|       |
|       └── Shop.jsx
│     
|── Context
|   └── index.js
|
├── Data/
│   └── initialProducts.js
|  
├── Icons/
│   ├── ArrowIcon.jsx
│   ├── CartIcon.jsx
|   |── ManIcon.jsx
│   └── SearchIcon.jsx
|
|── Reducer
|   |── cartReducer.js
|   └── productReducer.js
|
├── App.jsx
├── main.jsx
└── index.css
```