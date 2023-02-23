import { useEffect, useState } from 'react'
import { createContext } from 'react'
import gradientsArray from '../gradientsArray'

export const GlobalContext = createContext()

export const GlobaProvider = props => {
	let [search, setSearch] = useState('')
	let [find, setFind] = useState([])
	let [count, setCount] = useState(20)
	let [show, setShow] = useState(false)
	let [copy, setCopy] = useState(false)
	let [favorite, setFavorite] = useState([])
	let saveToLocalStorage = items => {
		localStorage.setItem(
			'react-gradients-favorite-items',
			JSON.stringify(items)
		)
	}

	if (copy) {
		setTimeout(() => {
			setCopy(false)
		}, 5000)
	}

	// DYNAMIC PAGINATION
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
	// SEARCH GRADIENTS
	useEffect(() => {
		let searchGradients = gradientsArray.filter(e =>
			e.colors.toString().includes(search)
		)
		if (searchGradients) {
			setFind(searchGradients)
		}
	}, [search])

	// ADD FAVORITE GRADIENTS
	const addToFavorite = gradient => {
		let newFavoriteGradientsList = [...favorite, gradient]
		setFavorite(newFavoriteGradientsList)
		saveToLocalStorage(newFavoriteGradientsList)
	}

	// REMOVE FAVORITE GRADIENT
	const removeItem = gradient => {
		let newFavoriteGradientsList = favorite.filter(
			favoriteGradient => favoriteGradient.name !== gradient.name
		)
		setFavorite(newFavoriteGradientsList)
	}

	return (
		<GlobalContext.Provider
			value={{
				addToFavorite,
				setShow,
				removeItem,
				setSearch,
				setCopy,
				favorite,
				find,
				search,
				count,
				show,
				copy,
			}}>
			{props.children}
		</GlobalContext.Provider>
	)
}
