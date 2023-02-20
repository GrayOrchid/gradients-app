import React from 'react'
import { useContext } from 'react'
import Gradient from '../../components/gradient/Gradient'
import { GlobalContext } from '../../context/GlobalState'

const FavoritePage = () => {
	const { favorite, setCopy } = useContext(GlobalContext)

	return (
		<div className='favorite-page'>
			<div className='container'>
				<div className='gradients'>
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
						<h1 className='gradients--clear'>Favorite List Clear</h1>
					)}
				</div>
			</div>
		</div>
	)
}

export default FavoritePage
