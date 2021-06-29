import React, { useState, useEffect, useCallback } from 'react';
//css
import './css/header.css';
//images
import mobile_image_1 from './images/mobile-image-hero-1.jpg';
import mobile_image_2 from './images/mobile-image-hero-2.jpg';
import mobile_image_3 from './images/mobile-image-hero-3.jpg';
import logo from './images/logo.svg';
import burger from './images/icon-hamburger.svg';
import close from './images/icon-close.svg';
import arrow from './images/icon-arrow.svg';
//json
import articles from './articles.json'


const Header = () => {
    let images = [mobile_image_1, mobile_image_2, mobile_image_3]
    const [value, setValue] = useState('none');
    const [index, setIndex] = useState(0);

    const prevClick = () => {
    	setIndex(index === 0 ? images.length - 1 : index - 1)
    }
    const nextClick = useCallback(() => {
    	setIndex(index === images.length - 1 ? 0 : index + 1)
    }, [images.length, index])

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
		<div className='header_article_container'>
		<ShowCurrentArticle index={index} />
            {/*<h2>Discover innovative ways to decorate</h2>
            <p>We provide unmatched quality, comfort, and style for property owners across the country.
                Our experts combine form and function in bringing your vision to life. Create a room in your
                own style with our collection and make your property a reflection of you and what you love.</p>*/}
            <div className='button_container'>
            	<button>Shop now</button><img src={arrow} alt="right incon arrow" />
            </div>
        </div>
	</header>
}

const ShowCurrentImage = ({index, images}) => 
	images.map((img, i) => index === i 
		&& <img key={img} src={img} alt="" className={`img${i} active`}/>)

const ShowCurrentArticle = ({index}) =>
	articles.map(({id, title, paragraph}) => id === index 
		&& 	<React.Fragment key={id}>
				<h2 key={id}>{title}</h2><p>{paragraph}</p>
			</React.Fragment>)
	
export default Header;