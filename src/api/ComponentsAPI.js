const fetchComponents = () => {
  // return fetch(`https://devsketch.herokuapp.com/api/v1/components`)
  return fetch(`http://localhost:3001/api/v1/components`) 
    .then((response) => response.json())
}

const fetchComponentByID = (componentID) => {
  // return fetch(`https://devsketch.herokuapp.com/api/v1/components/${componentID}`)
  return fetch(`http://localhost:3001/api/v1/components/${componentID}`) 
    .then((response) => response.json())
}

const addComponent = (componentObject) => {
  // return fetch(`https://devsketch.herokuapp.com/api/v1/components`, {
  return fetch(`http://localhost:3001/api/v1/components`, {
    headers: {'content-type': 'application/json'},
    method: "POST",
    mode: "cors",
    body: JSON.stringify(componentObject)
  })
  .then((response) => response.json())
}

const deleteComponent= (componentID) => {
  // return fetch(`https://devsketch.herokuapp.com/api/v1/components/${componentID}`, {
  return fetch(`http://localhost:3001/api/v1/components/${componentID}`, {
    method: "DELETE",
    mode: "cors"
  })
}

// const updateComponent = (componentID, componentObject) => {
//   return fetch(`http://localhost:3001/api/v1/components/${componentID}`, {
//     headers: {'content-type': 'application/json'},
//     method: "PATCH",
//     mode: "cors",
//     body: JSON.stringify(componentObject)
//   })
//   .then((response) => response.json())
// }

export default {
  fetchComponents: fetchComponents,
  fetchComponentByID: fetchComponentByID,
  addComponent: addComponent,
  deleteComponent: deleteComponent 
}