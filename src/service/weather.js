const api = "appid=64a99a71f14dee85c72343dc7a9609a1";
export const getTem = (search) => {
        // const api="appid=64a99a71f14dee85c72343dc7a9609a1";
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&${api}`)
        .then((res) => res.json());
};

export const getTem1 = (lat, lon) => {
       return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&${api}`)
        .then((res) => res.json());
};