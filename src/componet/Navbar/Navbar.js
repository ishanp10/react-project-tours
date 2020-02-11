import React, { Component } from 'react';
import TwoBell from '../../TwoBell.svg'
import  './navbar.scss'

 class Navbar extends Component {
    render() {
        return (
            // <div>
            //     <h1>ishan</h1>
            // </div>
           <nav className="navbar">
               <img src={TwoBell} width="50px" alt="logimg"/>
               <ul className="nav-ul">
               <li>
               <a href="/" className="nav-link">home</a>
               </li>    
               <li>
               <a href="/" className="nav-link">about</a>
               </li>   
               <li>
               <a href="/" className="nav-link active">tours</a>
               </li>   
               </ul>

           </nav>
        )
    }
}
export default Navbar; 