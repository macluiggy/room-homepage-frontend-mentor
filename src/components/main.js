import React from 'react';
import './css/main.css'
//images
import about from './images/image-about-dark.jpg';
import about_light from './images/image-about-light.jpg';

const Main = () => {
	return <main>
		        <div>
		            <img src={about} alt="table" />
		        </div>
		        <div className="about_article">
		            <h2>About our furniture</h2>
		            <p>Our multifunctional collection blends design and function to suit your individual taste.
		                Make each room unique, or pick a cohesive theme that best express your interests and what
		                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
		                or anything in between. Product specialists are available to help you create your dream space.</p>
		        </div>
		        <div>
		            <img src={about_light} alt="taable light" />
		        </div>
    		</main>
}

export default Main