const API_KEY = "PVdTZEYkxCeGKkB6GIz05Nv3OP53";

//get all the upcoming matches



export const getMatches=()=>{
    const url = `https://cricapi.com/api/matches/?apikey=${API_KEY}`;

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log("ERROR : ", error));
};



//Load Match Details
export const getMatchDetail = (id) => {
    const url =  `https://cricapi.com/api/cricketScore/?apikey=${API_KEY}&unique_id=${id}`;

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error));
};