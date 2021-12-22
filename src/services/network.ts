const GET_DATA_URL: string = 'https://randomuser.me/api/?results=200'

export const getData = async (url : string = '') => {
    try {
        const response = await fetch(url)
        return await  response.json()
    } catch (error) {
        console.error(error)
    }

}