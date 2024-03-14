import React from 'react'
import trunks from '../components/assets/img/image.jpg'
import trunks2 from '../components/assets/img/hologram.png'
// import logo from '../components/assets/img/dbz-logo.png'
import '../components/assets/css/threeD.css'

function threeD() {
  return (
   
	<div className="cardImg">
		<div className="wrapper">
		  <img src={trunks} className="cover-image" />
		</div>
	
		{/* <img src={logo} className="logo" /> */}

		<img src={trunks2} className="character" />
	</div>
   
  )
}

export default threeD
