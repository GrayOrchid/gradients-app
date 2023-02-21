import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

const Input = ({ location }) => {
	const { search, setSearch } = useContext(GlobalContext)
	return (
		<>
			{location.pathname == '/' ? (
				<input
					className='header--input'
					placeholder='#'
					type='text'
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
			) : (
				<span className='header--input header--span'></span>
			)}
		</>
	)
}

export default Input
