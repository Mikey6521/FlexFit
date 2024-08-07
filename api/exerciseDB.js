import axios from "axios";
import { rapidAPIkey } from "../constants/sliderImages";

const baseURL = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url, params) => {
    try {
        const options ={
            method: "GET",
            url,
            params,
            headers:{
                'X-RapidAPI-Key': rapidAPIkey,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
    
        const response = await axios.request(options);
        // console.log(response.data)
        return response.data;
        
    } catch (error) {
        console.log('error: ', error.message);
    }
}

export const fetchExercisesByBodyPart = async (bodyPart) => {
    let data = await apiCall(baseURL+`/exercises/bodyPart/${bodyPart}`);
    return data;
}