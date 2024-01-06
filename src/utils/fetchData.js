export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1172bfdebdmshf613d5b59aa6793p1bc780jsn7329ce0d8001',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};


export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};


  
