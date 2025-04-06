import axios from 'axios';

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1/",
})

//Get Method
export const getAllCountries = () =>{
    return api.get("/all?fields=name,population,flags,region,capital");
}

//GET method for individual country
export const getAllCountriesIndData = (name) => {
    return api.get(`/name/${name}?fullText=true&fields=name,capital,flags,population,region,languages,currencies,subregion,borders`);
}