import React from 'react';
//css
import './css/header.css';
//images
import desktop_image_1 from './images/desktop-image-hero-1.jpg';
import desktop_image_2 from './images/desktop-image-hero-2.jpg';
import desktop_image_3 from './images/desktop-image-hero-3.jpg';
import mobile_image_1 from './images/mobile-image-hero-1.jpg';
import logo from './images/logo.svg';
import burger from './images/icon-hamburger.svg';
import close from './images/icon-close.svg';


let img1 = window.innerWidth >= 800 ? desktop_image_1 : mobile_image_1;

const Header = () => {
	const [value, setValue] = React.useState('navbar');

	const showNavBar = () => {
		setValue('navbar')
	}

	const hideNavBar = () => {
		setValue('hide_navbar')
	}
	return <header>
		<div className='nav_container'>
		 	<figure className='burger_and_logo_container'>
		 		<img src={burger} alt="" className='burger' onClick={showNavBar}/>
		 		<img src={logo} alt="" />
		 	</figure>
			<nav className={value} >
		      <figure className='close_container'>
		        <img src={close} alt="" onClick={hideNavBar} />
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
			<img src={img1} alt="" />
		</div>
	</header>
}
export default Header;