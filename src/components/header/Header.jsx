import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'
import BurgerMenu from './BurgerMenu'

import './header.css'

const Header = ({ location }) => {
	const { setSearch, search, show, setShow } = useContext(GlobalContext)
	return (
		<header className='header'>
			<div className='header--adaptive'>
				<FontAwesomeIcon
					className='header--burger-menu-state-button'
					icon={faBars}
					onClick={() => setShow(true)}
				/>
				{location.pathname == '/' ? (
					<input
						className='header--input'
						placeholder='#'
						type='text'
						onChange={e => setSearch(e.target.value)}
					/>
				) : (
					<span className='header--input header--span'></span>
				)}
			</div>
			<div className='container'>
				<div className='header--content'>
					<h1 className='header--logo'>
						<Link
							className='header--logo-link'
							to={'/'}>
							React
						</Link>
					</h1>
					<div className='header--items'>
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
						<nav className='header--nav'>
							<ui className='header--list-items'>
								<li className='header--nav-item'>
									<Link
										className='header--nav-link'
										to={'/'}>
										Homepage
									</Link>
								</li>
								<li className='header--nav-item'>
									<Link
										className='header--nav-link'
										to={'favorite'}>
										Favorite
									</Link>
								</li>
								<li className='header--nav-item'>
									<Link
										className='header--nav-link'
										to={'/'}>
										Links
									</Link>
								</li>
							</ui>
						</nav>
					</div>
				</div>
			</div>
			<BurgerMenu
				location={location}
				show={show}
				setShow={setShow}
			/>
		</header>
	)
}

export default Header
