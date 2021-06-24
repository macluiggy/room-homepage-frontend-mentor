import React from 'react';
//css
import './css/header.css';
//images
import desktop_image_1 from './images/desktop-image-hero-1.jpg';
import desktop_image_2 from './images/desktop-image-hero-2.jpg';
import desktop_image_3 from './images/desktop-image-hero-3.jpg';
import logo from './images/logo.svg';
import burger from './images/icon-hamburger.svg';
import close from './images/icon-close.svg';

const Header = () => 
	<header>
		<div className='nav_container'>
		 	<figure className='burger_and_logo_container'>
		 		<img src={burger} alt="" className='burger'/>
		 		<img src={logo} alt="" />
		 	</figure>
			<nav className='navbar'>
		      <figure className='close_container'>
		        <img src={close} alt="" />
		      </figure>
		      <ul>
		        <li>Home</li>
		        <li>Shop</li>
		        <li>About</li>
		        <li>Contact</li>
		      </ul>
		    </nav>
		</div>
		<div className='images_container'>
			<img src={desktop_image_1} alt="" />
		</div>
	</header>

export default Header;