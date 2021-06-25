import React from 'react';
//css
import './css/header.css';
//images
import desktop_image_1 from './images/desktop-image-hero-1.jpg';
import desktop_image_2 from './images/desktop-image-hero-2.jpg';
import desktop_image_3 from './images/desktop-image-hero-3.jpg';
import mobile_image_1 from './images/mobile-image-hero-1.jpg';
import mobile_image_2 from './images/mobile-image-hero-2.jpg';
import logo from './images/logo.svg';
import burger from './images/icon-hamburger.svg';
import close from './images/icon-close.svg';


const Header = () => {
	const [value, setValue] = React.useState('none');

	const showNavBar = () => {
		setValue('flex')
	}

	const hideNavBar = () => {
		setValue('none')
	}
	return <header>
		<div className='nav_container'>
		 	<figure className='burger_and_logo_container'>
		 		<img src={burger} alt="" className='burger' onClick={showNavBar}/>
		 		<img src={logo} alt="" />
		 	</figure>
			<nav className='navbar' style={{display: value}}>
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
			<img src={mobile_image_1} alt="" className='img1 active'/>
			<img src={mobile_image_2} alt="" className='img2 '/>
			<div className='arrows_container'>
				<div className='arrow left'></div>
				<div className='arrow right'></div>
			</div>
		</div>
	</header>
}
export default Header;