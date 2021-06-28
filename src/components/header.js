import React, { useState, useEffect } from 'react';
//css
import './css/header.css';
//images
//import desktop_image_1 from './images/desktop-image-hero-1.jpg';
//import desktop_image_2 from './images/desktop-image-hero-2.jpg';
//import desktop_image_3 from './images/desktop-image-hero-3.jpg';
import mobile_image_1 from './images/mobile-image-hero-1.jpg';
import mobile_image_2 from './images/mobile-image-hero-2.jpg';
import mobile_image_3 from './images/mobile-image-hero-3.jpg';
import logo from './images/logo.svg';
import burger from './images/icon-hamburger.svg';
import close from './images/icon-close.svg';


const Header = () => {
    let images = [mobile_image_1, mobile_image_2, mobile_image_3]
    const [value, setValue] = useState('none');
    const [index, setIndex] = useState(0);

    const prevClick = () => {
    	setIndex(index === 0 ? images.length - 1 : index - 1)
    }
    const nextClick = () => {
    	setIndex(index === images.length - 1 ? 0 : index + 1)
    }

    useEffect(() => {
    	let interval = setInterval(nextClick, 5000);
    	return () => clearInterval(interval);
    }, [index, nextClick]);

    return <header>
		<div className='nav_container'>
		 	<figure className='burger_and_logo_container'>
		 		<img src={burger} alt="" className='burger' onClick={() => setValue('flex')}/>
		 		<img src={logo} alt="" />
		 	</figure>
			<nav className='navbar' style={{display: value}}>
		      <figure className='close_container'>
		        <img src={close} alt="" onClick={()=> setValue('none')} />
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
			<ShowCurrentImage images={images} index={index}/>
			<div className='arrows_container'>
				<div className='arrow left' onClick={prevClick}></div>
				<div className='arrow right' onClick={nextClick}></div>
			</div>
		</div>
	</header>
}

 const ShowCurrentImage = ({index, images}) => 
		images.map((img, i) => index === i 
			? <img key={img} src={img} alt="" className={`img${i} active`}/> 
			: '')

export default Header;