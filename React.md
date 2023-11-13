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
