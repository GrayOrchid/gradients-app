import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import './copy.css'
const Copy = () => {
	const { copy, setCopy } = useContext(GlobalContext)
	return (
		<div
			className={copy ? 'copied --active' : 'copied'}
			onClick={() => setCopy(false)}>
			<div className='copied--text'>Copied</div>
		</div>
	)
}

export default Copy
