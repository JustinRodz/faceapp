import React from 'react';
import './ImageLinkForm.css'
const ImageLinkForm = () => {
	return (
	 <div>
		<p className='f2'>
			{'This Magic Machine will detect faces in any picture. Give it a try!'}
		</p>
		<div className= 'center'>
		<div className='form center pa4 br2 shadow-3'>
		 <input className='f4 pa2 w-60 center' type='text' />
		 <button className= 'w-25 grow f4 link ph3 pv2 dib white bg-light-blue'>Detect</button>

	 </div>
	 </div>
	 </div>
		);
}

export default ImageLinkForm;