import { dbService } from './fbase';

const getAll = async (req, res) => {
    dbService.collection('shops').get()
    .then( snapshot => {
        const shops = []
        snapshot.forEach( doc => {
            const data = doc.data()
            shops.push(data)
        })
        this.setState({ shops : shops })
    })
    .catch( error => console.log(error))
}


const getById = async (req, res) => {
    const userData = await dbService.firesotre('shops').doc(req.params.id).get()
    res.json(userData.data());
}



module.exports = {
    getAll,
    getById
}