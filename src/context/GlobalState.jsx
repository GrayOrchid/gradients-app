import { useEffect, useState } from 'react'
import { createContext, useReducer } from 'react'
import gradientsArray from '../gradientsArray'
import AppReducer from './AppReducer'

const initialState = {
	favorite: localStorage.getItem('favorite')
		? JSON.parse(localStorage.getItem('favorite'))
		: [],
}

export const GlobalContext = createContext(initialState)

export const GlobaProvider = props => {
	const [state, dispatch] = useReducer(AppReducer, initialState)
	let [search, setSearch] = useState('')
	let [find, setFind] = useState([])
	let [count, setCount] = useState(20)
	let [show, setShow] = useState(false)
	let [copy, setCopy] = useState(false)
	if (copy) {
		setTimeout(() => {
			setCopy(false)
		}, 5000)
	}
	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
	}, [])

	let scrollHandler = e => {
		let windowHeight =
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
			100
		if (windowHeight) {
			setCount(prevState => prevState + 20)
		}
		if (search) {
			setCount(count == 20)
			windowHeight = 0
		}
	}
	useEffect(() => {
		let searchGradients = gradientsArray.filter(e =>
			e.colors.toString().includes(search)
		)
		if (searchGradients) {
			setFind(searchGradients)
		}
	}, [search])
	useEffect(() => {
		localStorage.setItem('favorite', JSON.stringify(state.favorite))
	}, [state])

	const addToFavorite = gradient => {
		dispatch({ type: 'ADD_TO_FAVORITE', payload: gradient })
	}
	const removeItem = name => {
		dispatch({ type: 'REMOVE_ITEM', payload: name })
	}

	return (
		<GlobalContext.Provider
			value={{
				favorite: state.favorite,
				addToFavorite,
				removeItem,
				find,
				search,
				setSearch,
				count,
				show,
				setShow,
				copy,
				setCopy,
			}}>
			{props.children}
		</GlobalContext.Provider>
	)
}
