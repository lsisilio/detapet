const fs = require('fs')
class Pets {
	constructor(filename = 'pets.json') {
		this.path = `./data/${filename}`
		// const content = fs.readFileSync(this.path);
		// console.log(content);
		// console.log(this.getAll())

		try {
			fs.readDir('data')
		} catch (error) {
			// fs.mkdir('data')
		}

		try {
			fs.writeFile(this.path, '[]')
			fs.access(this.path)
		} catch (error) {}
	}

	createId() {
		// console.log(this.getAll())
		return new Date().getTime().toString()
	}

	async createPets(req, res, next) {
		const totalData = await this.getAll()
		totalData.push({ ...req.body })

		let path = './data/pets.json'
		fs.writeFileSync(path, JSON.stringify(totalData, null, 2))
		// console.log(totalData)
		// console.log(req.body)
	}

	getAll() {
		let path = './data/pets.json'
		let json = JSON.parse(fs.readFileSync(this.path))
		return json
	}

	getPets(req, res, next) {
		// res.send(await this.getAll())
		const resp = this.getAll()
		console.log(resp)
		res.send(resp)
	}

	// async getSingle(id) {
	//     const data = await this.getAll()
	//     return data.find(pets => pets.id === id)
	// }

	// async getByState(state) {
	//     const data = await this.getAll()
	//     return data.filter(pets => pets.state === state)
	// }
}

module.exports = Pets
