
import { useReducer, useState } from 'react'
import './App.css'
import Main from './Components/Main/Main'
import { BooksContext, ThemeContext } from './Context'
import { CartReducers, initialState } from './Reducers/CartReducers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const[darkMode, setDarkMode]= useState(true)
  const [state, dispatch]=useReducer(CartReducers,initialState)

  

  return (
    <>
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
      <BooksContext.Provider  value={{ state, dispatch }}>
        <Main />
        <ToastContainer/>

      </BooksContext.Provider>
    </ThemeContext.Provider>
    
    </>


  )
}

export default App
