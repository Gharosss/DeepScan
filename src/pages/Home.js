import React from 'react';
import '../assets/styles/Home.css'
import { Context } from '../components/Context';
import Navbar from '../components/Navbar';
import SearchArea from '../components/SearchArea';

const navbarColor = '#FFFFFF';



document.documentElement.style.setProperty('--navbarColor', navbarColor);

function Home() {
    return (
        <div className='HomeDiv'>
            <Navbar/>
            <div className = 'top-half'>
                <SearchArea/>
            </div>
            <div className = 'bottom-half'>

            </div>
        </div>
    );
}


export default Home;