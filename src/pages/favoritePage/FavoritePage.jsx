import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Gradient from '../../components/gradient/Gradient'
import { GlobalContext } from '../../context/GlobalState'

const FavoritePage = () => {
	const { favorite, setCopy } = useContext(GlobalContext)
	return (
		<div className='favorite-page'>
			<div className='container'>
				<div
					className={
						favorite.length < 5 ? 'gradients --start' : 'gradients'
					}>
					{favorite.length > 0 ? (
						<>
							{favorite.map(gradient => (
								<Gradient
									gradient={gradient}
									setCopy={setCopy}
								/>
							))}
						</>
					) : (
						<Link
							className='gradients--clear'
							to={'/'}>
							Favorite List Clear
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}

export default FavoritePage
