import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import gradientsArray from '../../gradientsArray'
import Gradient from './Gradient'
import './gradient.css'
const Gradients = ({ setCopy }) => {
	const { search, find, count } = useContext(GlobalContext)

	return (
		<>
			{search ? (
				<div
					className={find.length < 5 ? 'gradients --start' : 'gradients'}>
					{find.slice(0, 20).map(gradient => (
						<Gradient
							gradient={gradient}
							setCopy={setCopy}
							key={gradient.name}
						/>
					))}
				</div>
			) : (
				<div className='gradients'>
					{gradientsArray.slice(0, count).map(gradient => (
						<Gradient
							gradient={gradient}
							setCopy={setCopy}
							key={gradient.name}
						/>
					))}
				</div>
			)}
		</>
	)
}

export default Gradients
