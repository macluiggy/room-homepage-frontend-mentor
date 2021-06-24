import React from 'react';
//css
import './css/header.css';
//images
import desktop_image_1 from './images/desktop-image-hero-1.jpg';
import desktop_image_2 from './images/desktop-image-hero-2.jpg';
import desktop_image_3 from './images/desktop-image-hero-3.jpg';

const Header = () => 
	<header>
		<div className='nav_container'>
		 	<figure className='burger_and_logo_container'>
		 		<img src='' alt="" />
		 		<img src='' alt="" />
		 	</figure>
			<nav>
		      <figure className='close_container'>
		        <img />
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
			<img src={desktop_image_2} alt="" />
		</div>
	</header>

export default Header;