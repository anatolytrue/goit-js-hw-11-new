const axios = require('axios').default
const APIKEY = '29317703-ef6f9bdce3d80f6e1cfb4e8df'
const BASE_URL = "https://pixabay.com/api/"

// const fetchGallery = async (value, step) => {
//     const result = await axios.get(BASE_URL, {
//         params: {
//             key: APIKEY,
//             q: `${value}`,
//             image_type: photo,
//             orientation: horizontal,
//             safesearch: true,
//             page: `${step}`,
//             per_page: 40
//         }
//     }
//     )
//             // console.log(result)
//     return result
// }
// console.log(fetchGallery)

const fetchGallery = async (value, step) => {
    const result = await axios.get(`${BASE_URL}?key=${APIKEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${step}&per_page=40`)
            console.log(result)
    return result
}
export default fetchGallery;
