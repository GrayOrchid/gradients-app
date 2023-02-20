import React, { useState, useContext } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { GlobalContext } from '../../context/GlobalState'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCopy,
	faHeart,
	faRotateLeft,
	faRotateRight,
	faX,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
const Gradient = props => {
	const { addToFavorite, favorite, removeItem } = useContext(GlobalContext)
	let added = favorite.find(e => e.name === props.gradient.name)
	let [deg, setDeg] = useState(0)
	if (deg > 360) {
		setDeg((deg = 0))
	}
	if (deg < 0) {
		setDeg((deg = 360))
	}
	let gradientCopyText =
		deg === 0
			? `background:linear-gradient(${props.gradient.colors});`
			: `background:linear-gradient(${deg}deg,${props.gradient.colors});`

	return (
		<AnimatePresence >
	<motion.div
			className={
				added ? 'gradients--card gradients--card-added' : 'gradients--card'
			}
			style={{
				background: `linear-gradient(${deg}deg,${props.gradient.colors})`,
			}}
			initial={{ opacity:0}}
			animate={{ opacity:1}}
			transition={{duration:.5}}
			exit={{scale:0,opacity:0}}

		>
			<div className='gradients--card-content'>
				<div className='gradients--card-items'>
					<div className='gradients--card-btns'>
						<FontAwesomeIcon
							className='gradients--card-btn '
							icon={faRotateLeft}
							onClick={() => setDeg(deg - 90)}
						/>
						<FontAwesomeIcon
							className='gradients--card-btn '
							icon={faRotateRight}
							onClick={() => setDeg(deg + 90)}
						/>
					</div>
					<div className='gradients--card-btns'>
						{added ? (
							<FontAwesomeIcon
								className='gradients--card-btn gradients--card-delete'
								icon={faX}
								onClick={() => removeItem(props.gradient.name)}
							/>
						) : (
							<FontAwesomeIcon
								className='gradients--card-btn gradients--card-add'
								icon={faHeart}
								onClick={() => addToFavorite(props.gradient)}
							/>
						)}
						<CopyToClipboard
							text={gradientCopyText}
							onCopy={() => props.setCopy(true)}>
							<FontAwesomeIcon
								className='gradients--card-btn gradients--card-copy'
								icon={faCopy}
							/>
						</CopyToClipboard>
					</div>
				</div>
				<div
					className='gradients--card-text'>
					<p className='gradients--card-name'>{props.gradient.name}</p>
					<div className='gradients--card-colors'>
						{props.gradient.colors.map((color, index) => (
							<CopyToClipboard
								key={index}
								text={color}
								onCopy={() => props.setCopy(true)}>
								<p className='gradients--card-color'>{color}</p>
							</CopyToClipboard>
						))}
					</div>
					<p>{deg} deg</p>
					<button className='gradients--card-open-page'>
						<Link className='gradients--card-link' to={`/gradient/${props.gradient.name}`}>Open</Link>
					</button>
				</div>
			</div>
		</motion.div>
		</AnimatePresence>
	)
}

export default Gradient
