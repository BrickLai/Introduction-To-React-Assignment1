'use strict';
const moviesAPI = './assets/scripts/movies.json';
const citiesAPI = './assets/scripts/cities.json';

const movieRow = document.querySelector('.row');

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    mode: 'cors'
};

async function getMovies() {
     try {
             const result = await fetch(moviesAPI, options);
             const data = await result.json();
             const movies = data.results;

             for(let i = 0; i < 10; i++ ) {
             const div = document.createElement('div');
             movieRow.appendChild(div);
             div.innerHTML = `<div class="photo"><img src=${movies[i].img}></div> 
             <div class="moviename">${movies[i].title}</div>`
             }
             console.log(movies);
         } catch(error) {
            console.log(error);
         }

}
getMovies();



const searchTicket = document.querySelector('.search-ticket .searchticket');
const movieReplied = document.querySelector('.msg-reply .movieReplied');

searchTicket.addEventListener('input',  () => {
        const movieCharacters = searchTicket.value.toLowerCase();
        if (movieCharacters.length < 2) {
            movieReplied.innerHTML = '';
            return;
          }
        fetch(moviesAPI,options).then(response => response.json())
                                .then(data => {
                                    const movieList=data.results;
                                    const filterMovies=movieList.filter(a => a.title.toLowerCase().includes(movieCharacters));
                                    if(filterMovies.length>0)
                                    {
                                        movieReplied.innerHTML = '';
                                        filterMovies.forEach(a => {
                                            const span=document.createElement('span');
                                            span.textContent=a.title;
                                            span.addEventListener('click',()=>{
                                                movieCharacters.value=span.textContent;
                                                movieReplied.innerHTML='';
                                            });
                                            movieReplied.appendChild(span);
                                        });
                                    }else{
                                        movieReplied.innerHTML='Movies not found';
                                    }
                                }) 
                                .catch(error => console.log(error));
    })
    
    async function getCities() {
        try {
            const response = await fetch(citiesAPI, options);
            if (!response.ok) {
                throw new Error(`${response.statusText} (${response.status})`);
            }
            const data = await response.json();
            cityList(data.cities);
        } catch(error) {
           //console.log(error);
    
        }
    }
    getCities();


    const searchCity = document.querySelector('.searchcity');
    const cityReplied = document.querySelector('.msg-reply .cityReplied');

    searchCity.addEventListener('input',  () => {
        const cityCharacters = searchCity.value.toLowerCase();
        if (cityCharacters.length < 2) {
            cityReplied.innerHTML = '';
            return;
          }
        fetch(citiesAPI,options).then(response => response.json())
                                .then(data => {
                                    const cityList=data.results;
                                    const filterCities=cityList.filter(a => a.title.toLowerCase().includes(movieCharacters));
                                    if(filterCities.length>0)
                                    {
                                        cityReplied.innerHTML = '';
                                        filterCities.forEach(a => {
                                            const span=document.createElement('span');
                                            span.textContent=a.title;
                                            span.addEventListener('click',()=>{
                                                cityCharacters.value=span.textContent;
                                                cityReplied.innerHTML='';
                                            });
                                            cityReplied.appendChild(span);
                                        });
                                    }else{
                                        cityReplied.innerHTML='Cities not found';
                                    }
                                }) 
                                .catch(error => console.log(error));
    })