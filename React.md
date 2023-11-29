# TABLE OF CONTENTS


[First Steps](#first-steps)
[JWT authentication](#jwt-authentication)

# First steps
### Installing necessary packages
```bash
- npm init react-app ... # project-name
- cd ... # project-name
- npm install axios
- npm install react-router-dom@latest
- npm install sass 
- npm install react-bootstrap bootstrap 
# -- in root file like App.js or index.js
# -- import 'bootstrap/dist/css/bootstrap.min.css'  
```

### Create store.js file in config folder
```bash
- cd ... # frontend
- touch store.js
```
There we create all necessary variables for our project
```js
import { createContext } from 'react';
const BASE_URL = "http://127.0.0.1:8000/"

const context = createContext()
const initialState = {}

function globalReducer(state, action) {
    switch (action.type) {
        case ...:
            return ...
        default:
            throw new Error("Unexpected action")
    }
}

export {
    context,
    initialState,
    globalReducer,
    BASE_URL,
};
```

### Create axios.js file in config folder
```bash
- cd ... # frontend
- touch axios.js
```
There we create all necessary variables for our project
```js
import axios from 'axios';
import { BASE_URL } from './store.js';

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' }, // for POST requests
    withCredentials: true   // for cookies:  if not set, then cookies are not sent
});
```


### Create HOC (higher order component) for checking if user is authenticated

`AuthCheck.jsx`
```javascript
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../conf/common';

export default function withAuthCheck(Component) {
    return function AuthenticatedComponent(props) {
        const navigate = useNavigate();

        useEffect(() => {
            if (!isLoggedIn()) {
                navigate('/auth');
            }
        }, [navigate]);


        return <Component {...props} />;
    };
}
```
Then we can use it in our components like this:
```javascript
...
import withAuthCheck from './AuthCheck'; 
const AuthenticatedComponent = withAuthCheck(Component);
...
```