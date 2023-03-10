const Pets = require('../pets/pets')
const pets = new Pets()

const createPets = (req, res) => {
    const id = pets.createId()
    try {
        pets.create(req.body, id)
        res.json({success: true, message: 'Pet criado'})
    } catch (e) {
        res.json({ success: false, message: 'Erro ao criar pet' })
        console.log(e)
    }
}

const getAll = async (req, res) => {
    try {
        const data = await pets.getAll()
        res.json({ success: true, pets: data });
    } catch (error) {
        res.json({
            success: false,
            message: 'Something went wrong, server error!',
        });
        console.log('Error while getting all news', error.message);
    }
}

// const getByState = async (req, res) => {
//     try {
//         const data = await pets.getByState(state)
//         if (!data) {
//             return res.json({ success: false, message: 'Erro ao buscar pet por estado' })
//         }
//         res.json({
//             success: true, message: 'boa pet por estado' })
//         console.log(pets.data)
//     } catch (e) {
//         res.json({ success: false, message: 'Erro ao buscar pet por estado' })
//         console.log(e)
//     }
// }

module.exports = {
    createPets,
    getAll,
    // getByState
}