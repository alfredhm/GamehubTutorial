import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '71cdae812c024e6080399644b5e614e4'
    }
})