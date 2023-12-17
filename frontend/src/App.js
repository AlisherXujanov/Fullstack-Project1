import './index.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'
import { context, initialState, globalReducer } from './conf/store.js'
import { useReducer } from 'react'
import AllComponents from './components/AllComponents.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState)
  state.dispatch = dispatch

  return (
    <context.Provider value={state}>
      <div className="App">
        <ToastContainer theme="dark" />

        <BrowserRouter>
          <AllComponents />
        </BrowserRouter>
      </div>
    </context.Provider>
  );
}

export default App;
