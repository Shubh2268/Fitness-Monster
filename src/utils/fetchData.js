export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7e70638880msh76b0d008a4aefc4p145119jsn9b793bfc2e33',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};


export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};


  
