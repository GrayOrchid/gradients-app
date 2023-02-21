import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
const BurgerMenu = () => {
	const { show, setShow } = useContext(GlobalContext)
	return (
		<div
			className={
				show ? `header--burger-menu active` : 'header--burger-menu'
			}>
			<FontAwesomeIcon
				className='header--burger-menu-state-button'
				icon={faX}
				onClick={() => setShow(false)}
			/>

			<div className='header--burger-menu-content'>
				<div className='header--burger-items'>
					<nav className='header--burger-nav'>
						<ui className='header--burger-list-items'>
							<li className='header--burger-nav-item'>
								<Link
									className='header--burger-nav-link'
									to={'/'}>
									Homepage
								</Link>
							</li>
							<li className='header--burger-nav-item'>
								<Link
									className='header--burger-nav-link'
									to={'favorite'}>
									Favorite
								</Link>
							</li>
							<li className='header--nav-item'>
								<Link
									className='header--burger-nav-link'
									to={'/'}>
									Links
								</Link>
							</li>
						</ui>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default BurgerMenu
