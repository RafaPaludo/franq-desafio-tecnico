import axios from "axios"

export default () => {
  return axios.create({
    baseURL: `http://35.173.236.69:3001/`
  })
}