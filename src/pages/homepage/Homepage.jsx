import React, { useState, useContext } from 'react'
import Gradients from '../../components/gradient/Gradients'
import { GlobalContext, GlobaProvider } from '../../context/GlobalState'
import './homepage.css'

const Homepage = (search, find) => {
	const { show, copy, setCopy } = useContext(GlobalContext)

	return (
		<div className={show ? 'homepage none-scroll' : 'homepage'}>
			<div className='container'>
				<div className='homepage--content'>
					<Gradients
						setCopy={setCopy}
						find={find}
						search={search}
					/>
				</div>
			</div>
		</div>
	)
}

export default Homepage
