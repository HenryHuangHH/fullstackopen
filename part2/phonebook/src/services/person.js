import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl) // returns a promise 
        .then(response => response.data)  // takes the ONE obj(include status, header etc) 
    // return its data(array of the obj we need)
}

const create = (newP) => {
    return axios.post(baseUrl, newP) // .then wait for the promiste to finish
        .then(response => response.data) // return back the new item

}



export default { getAll, create }