import apiClient from './client'

const getAll = async () => {
	return await apiClient.get('/pets')
}

const createPets = async () => {
	// const id = new Date().getTime().toString()
	// this.state.id = id
	return await apiClient.post('/create')
}

// const getByState = async state => {
// 	const endpoint = `/pets/:${state}`

// 	try {
// 		const response = await apiClient.get(endpoint)
// 		// if (response.data.sucess) {
// 		//     console.log(response)
// 		//     return response.data.pets
// 		// }
// 	} catch (error) {
// 		console.log(error)
// 		return []
// 	}
// }

export default {
	getAll,
	createPets,
}
