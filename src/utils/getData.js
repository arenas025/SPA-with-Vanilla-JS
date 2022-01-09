const API = "https://rickandmortyapi.com/api/character/";
const getData=async(id)=>{
    const apiURL = id ? `${API}${id}`: API //este if ternario significa que si existe id devuelve la url con el id y si no entonces devuelve solo la api sin el id
    try{
        const response= await fetch(apiURL);
        const responseJSON= await response.json();
        return responseJSON;
    } catch(error){
        console.log("Error",error);
    };
};


export {getData}