import React from 'react';
import './NavBar.css'
import Fire from '../../assets/fire.png'
import Star from '../../assets/glowing-star.png'
import Party from '../../assets/partying-face.png'
const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Movie Maniac</h1>
            <div className="navbar_links">
            <a href='#popular'>Popular <img src={Fire} className='navbar_emoji' alt='fire emoji'/></a>
            <a href='#top_rated'>Top Rated <img src={Star} className='navbar_emoji' alt='star emoji'/></a>
            <a href='#upcoming'>Upcoming <img src={Party} className='navbar_emoji' alt='party emoji'/></a>
            </div>
        </nav>
    )
}
export default NavBar;  