import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import gradientsArray from '../../gradientsArray'
import './gradientPage.css'
import CircularSlider from 'advanced-react-circular-slider'
import 'advanced-react-circular-slider/main.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCopy,
	faRotateLeft,
	faRotateRight,
} from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../../context/GlobalState'
const GradientPage = () => {
	let gradientName = useParams()
	let [gradient, setGradient] = useState({})
	let { show, setCopy } = useContext(GlobalContext)
	useEffect(() => {
		let getGradient = gradientsArray.filter(e =>
			e.name.includes(gradientName.name)
		)
		setGradient(getGradient[0])
	}, [])
	let [deg, setDeg] = useState(0)
	if (deg > 360) {
		setDeg((deg = 0))
	}
	if (deg < 0) {
		setDeg((deg = 360))
	}
	return (
		<div
			className='gradient-page'
			style={{
				background: `linear-gradient(${deg}deg,${gradient.colors})`,
			}}>
			<div className='gradient-page--content'>
				<h1 className='gradient-page--name'>{gradient.name}</h1>
				<div className='gradient-page--deg-items'>
					<FontAwesomeIcon
						className='gradient-page--deg-btn'
						icon={faRotateLeft}
						onClick={() => setDeg(deg - 90)}
					/>
					<CircularSlider
						className='gradient-page--input-circular'
						width={150}
						hideKnob={show ? true : false}
						labelFontSize={'16px'}
						hideLabelValue={true}
						knobEl={'none'}
						min={0.1}
						max={360}
						limit={360}
						labelStep={90}
						roundLabelColor={'transparent'}
						roundLabelArctive={'transparent'}
						onChange={value => {
							setDeg(Math.floor(value.value))
						}}
					/>
					<FontAwesomeIcon
						className='gradient-page--deg-btn '
						icon={faRotateRight}
						onClick={() => setDeg(deg + 90)}
					/>
				</div>
				<input
					className='gradient-page--input-number'
					value={deg}
					type='number'
					onChange={e => setDeg(e.target.value)}
				/>
				<CopyToClipboard
					className='gradient-page--text-copy'
					onCopy={() => setCopy(true)}
					text={`background-color: linear-gradient(${deg}deg,${gradient.colors});`}>
					<h6 className='gradient-page--text'>
						<FontAwesomeIcon
							className='gradient-page--text-copy-button '
							icon={faCopy}
						/>
						{`background-color: linear-gradient(${deg}deg,${gradient.colors});`}
					</h6>
				</CopyToClipboard>
			</div>
		</div>
	)
}

export default GradientPage
