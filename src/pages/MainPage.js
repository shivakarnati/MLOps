import React from 'react';
import '../css/MainPage.css';
import '../css/Registration.css';
import { Link } from 'react-router-dom';


function Dump(){
    return (
        <div className='container'> 
        <div className="title">KI</div>
        <div className="click">
        <div className="drop"></div>
        <div className="glass">
        <div className="water">
        <div className="wave"></div>
        <div className="rewave"></div>
        </div>
        </div>
        </div> 
        </div>
    )
}

const MainPage =()=>{
    return (
        <div>
        <h1>Welcome To My AI World</h1>
        <Dump/>
        < div className='buttons'>
        <div className='register'>
        <Link to="/register">
        <button type='submit'>Register</button>
        </Link>
        </div>
        <div className='login'>
        <Link to="/login">
        <button type='submit'>Login</button>
        </Link>
        </div>
        </div>
        </div>
    );
}

export default MainPage;