import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
	return (
	<div className='ma3 pa1'>
		<Tilt className="Tilt br4 shadow-3" 
			  options={{ max : 20, speed: 5, scale: 1.05 }} 
			  style={{ height: 120, width: 120 }} >
 			<div className="Tilt-inner pa2">
 			<img style={{paddingTop: '20px'}} alt='logo' src={brain}/> 
 			</div>
		</Tilt>
	</div>
		);
}

export default Logo