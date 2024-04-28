import axios from 'axios'

const API_URl = 'http://localhost:12000'

export const uploadFile = async (data)=>{
  try {
    let response =  await axios.post(` ${API_URl}/upload` , data);
  return response.data
  } catch (error) {
    console.error('Error while calling the api', error.message);
  }
}

