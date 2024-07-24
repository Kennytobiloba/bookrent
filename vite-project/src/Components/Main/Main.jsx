import React, { useContext } from 'react'
import { ThemeContext } from '../../Context'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    const {darkMode} = useContext(ThemeContext);
  return (
    <div className={`h-full w-full  ${darkMode ? "dark" : ""}`}>
        <Header/>
       <main>
       <div className='container grid lg:grid-cols-[218px_2fr] gap-[3.5rem] '>
        <Sidebar/>
        <div className='min-h-screen '>
          <Outlet/>
        </div>

           </div>
       </main>


    </div>
  )
}

export default Main