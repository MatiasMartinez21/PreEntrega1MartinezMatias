import MOCK_DATA from '../Data/MOCK_DATA.json'



export const pedirDatos = () => {
    return new Promise((resolver, reject) => {
        setTimeout(() => {
            resolver(MOCK_DATA)
        }, 5000)

    })
}