const fetchSettingsByComponentID = (componentID) => {
  return fetch(`https://devsketch.herokuapp.com/api/v1/components/${componentID}/settings`) 
    .then((response) => response.json())
}

const fetchSettingBySettingID = (componentID, settingID) => {
  return fetch(`https://devsketch.herokuapp.com/api/v1/components/${componentID}/settings/${settingID}`) 
    .then((response) => response.json())
}

const addComponentSetting = (componentID, settingObject) => {
  return fetch(`https://devsketch.herokuapp.com/api/v1/components/${componentID}/settings`, {
    headers: {'content-type': 'application/json'},
    method: "POST",
    mode: "cors",
    body: JSON.stringify(settingObject)
  })
  .then((response) => response.json())
}

const updateComponentSetting = (componentID, settingID, componentSetting) => {
  return fetch(`https://devsketch.herokuapp.com/api/v1/components/${componentID}/settings/${settingID}`, {
    headers: {'content-type': 'application/json'},
    method: "PATCH",
    mode: "cors",
    body: JSON.stringify(componentSetting)
  })
  .then((response) => response.json())
}

const deleteComponentSetting = (componentID, settingID) => {
  return fetch(`https://devsketch.herokuapp.com/api/v1/components/${componentID}/settings/${settingID}`, {
    method: "DELETE",
    mode: "cors"
  })
}

export default {
  fetchSettingsByComponentID: fetchSettingsByComponentID,
  fetchSettingBySettingID: fetchSettingBySettingID,
  addComponentSetting: addComponentSetting,
  updateComponentSetting: updateComponentSetting,
  deleteComponentSetting: deleteComponentSetting
}