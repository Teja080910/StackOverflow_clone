import React from 'react';
import {Link} from 'react-router-dom';
import ser from '../../assets/magnifying-glass-solid.svg';
// import { useState,useEffect } from 'react';
const Navbar=()=>
{
    // const [log,slog]=useState([null])
    var x=null;
    return(
        <>
        <nav className='mainnav'>
            <div className='navbar'>
                <Link to='/' className='navitems'>
                <img src={'sologo.png'} width={'150px'} height={'46px'} alt='logo'></img>
                </Link>
                <Link to='/about' className='navitems navbtn'>About</Link>
                <Link to='/products' className='navitems navbtn'>Products</Link>
                <Link to='/forteam' className='navitems navbtn'>For Teams</Link>
                <form> 
                    <input type='text' placeholder='search...'></input>
                    <img  src={ser} width={'20px'} alt='search' className='navsearch'></img>
                </form>
                {
                    x === null?
                    <>
                    <Link to='/login' className='navitems navbtn navlog'>Log in</Link>
                    <Link to='/signup' className='navitems navbtn navsign'>Sign up</Link>
                    </>:
                   <>
                    <Link to='/'>M</Link>
                    <Link to='/logout' className='navitems navbtn navlog'>Log out</Link>
                   </>
                }
            </div>
        </nav>
        </>
    )
}
export default Navbar;