import React, { useState, useEffect } from 'react';
//css
import './css/header.css';
//images
import desktop_image_1 from './images/desktop-image-hero-1.jpg';
import desktop_image_2 from './images/desktop-image-hero-2.jpg';
import desktop_image_3 from './images/desktop-image-hero-3.jpg';
import mobile_image_1 from './images/mobile-image-hero-1.jpg';
import mobile_image_2 from './images/mobile-image-hero-2.jpg';
import mobile_image_3 from './images/mobile-image-hero-3.jpg';
import logo from './images/logo.svg';
import burger from './images/icon-hamburger.svg';
import close from './images/icon-close.svg';


const Header = () => {
    let active = {
        active1: 'active',
        active2: '',
        active3: '',
    }
    const [value, setValue] = React.useState('none');
    const [index, setIndex] = useState(0);

    const handleClickPrev = () => {
    	console.log(`estas en el index ${index}`)
        setIndex(index - 1)
        if (index < 1) {
            setIndex(2)
            active = {
                active1: '',
                active2: '',
                active3: 'active',
            }
        }
        if (index > 2) {
        	setIndex(0)
            active = {
                active1: 'active',
                active2: '',
                active3: '',
            }
        }
        if (index === 1) {
            active = {
                active1: '',
                active2: 'active',
                active3: '',
            }
        }
        console.log(active)
    }
    useEffect(() => {}, [])
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
			<img src={mobile_image_1} alt="" className={`img ${active.active1}`}/>
			<img src={mobile_image_2} alt="" className={`img ${active.active2}`}/>
			<img src={mobile_image_3} alt="" className={`img ${active.active3}`}/>
			<div className='arrows_container'>
				<div className='arrow left' onClick={handleClickPrev}></div>
				<div className='arrow right' ></div>
			</div>
		</div>
	</header>
}
export default Header;