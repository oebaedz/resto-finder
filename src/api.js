import axios from "axios";

// export const getRestoList = async () => {
//     const resto = await axios.get(`{process.env.REACT_APP_BASEURL}`)
//     console.log({restoList: resto})
// }

const options = {
    method: 'GET',
    url: 'https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list',
    params: {
      queryPlaceValueCityId: '348156',
      pageSize: '3',
      pageNumber: '3'
    },
    headers: {
    'X-RapidAPI-Key': 'bbe4238e99msh220381f7a6507a5p19183ejsnb92e26ba058e',
    'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
  }
};

export const getRestos = async () => {
    try {
      const response = await axios.request(options)
      return response.data.data
    } catch (error) {
      console.error(error)
    }
  }
