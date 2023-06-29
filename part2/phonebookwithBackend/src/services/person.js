import axios from 'axios';

const get = (url) => {
    const promise = axios.get(url);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}

const add = (url, newObject) => {
    const promise = axios.post(url, newObject);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}

const deletePerson = (url, id) => {
    const promise = axios.delete(`${url}/${id}`);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}

const updatePerson = (url, id, newObject) => {
    console.log("updatePerson url:", url);
    console.log("updatePerson id:", id);
    console.log("updatePerson newObject:", newObject);
    const promise = axios.put(`${url}/${id}`, newObject);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
  };

const personService = { get, add, deletePerson, updatePerson };

export default personService;
