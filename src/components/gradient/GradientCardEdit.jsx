import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
	faCopy,
	faX,
	faHeart,
	faRotateLeft,
	faRotateRight,
} from '@fortawesome/free-solid-svg-icons'

const GradientCardEdit = ({ props, setDeg, deg, added }) => {
	console.log(props)
	const { removeItem, addToFavorite } = useContext(GlobalContext)
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
		<div className='gradients--card-edit-items'>
			<div className='gradients--card-btns'>
				<FontAwesomeIcon
					className='gradients--card-btn'
					icon={faRotateLeft}
					onClick={() => setDeg(deg - 90)}
				/>
				<FontAwesomeIcon
					className='gradients--card-btn'
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
	)
}

export default GradientCardEdit
