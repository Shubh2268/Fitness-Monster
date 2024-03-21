export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '890a498411mshf7fe463dfd82ba0p1a75edjsndd60fad303d5',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};


export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};


  
