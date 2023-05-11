

export const ExercisesOption =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY ,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };



export const FetchData = async (url, option) =>{
 const response = await fetch(url, option);
 const data = await response.json();
 return data;
}