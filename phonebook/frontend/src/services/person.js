import axios from "axios";

const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    return axios.get(baseUrl) // returns a promise 
        .then(response => response.data)  // takes the ONE obj(include status, header etc) 
    // return its data(array of the obj we need)
}

const create = (newP) => {
    return axios.post(baseUrl, newP) // .then wait for the promiste to finish
        .then(response => response.data) // return back the new item

}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updateNumber = (id, Newnumber) => {
    return axios.put(`${baseUrl}/${id}`, Newnumber).then((response) => response.data)
}



export default { getAll, create, remove, updateNumber }