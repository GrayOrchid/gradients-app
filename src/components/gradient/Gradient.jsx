import React, { useState, useContext } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { GlobalContext } from '../../context/GlobalState'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import GradientCardEdit from './GradientCardEdit'
const Gradient = props => {
	const { favorite } = useContext(GlobalContext)
	let added = favorite.find(e => e.name === props.gradient.name)
	let [deg, setDeg] = useState(0)
	return (
		<AnimatePresence>
			<motion.div
				className={
					added
						? 'gradients--card gradients--card-added'
						: 'gradients--card'
				}
				style={{
					background: `linear-gradient(${deg}deg,${props.gradient.colors})`,
				}}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				exit={{ scale: 0, opacity: 0 }}>
				<div className='gradients--card-content'>
					<GradientCardEdit
						props={props}
						deg={deg}
						setDeg={setDeg}
						added={added}
					/>
					<div className='gradients--card-text'>
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
							<Link
								className='gradients--card-link'
								to={`/gradient/${props.gradient.name}`}>
								Open
							</Link>
						</button>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	)
}

export default Gradient
