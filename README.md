<h2>Introduction_To_React_Assignment01</h2>

<h3>Technologies</h3>
<li>HTML5</li>
<li>CSS3</li>
<li>JavaScript</li>
<li>Git</li>

<h3>key Code</h3>

```

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
```

<h3>Launch</h3>
<a href="https://bricklai.github.io/Introduction-To-React-Assignment1/">Click here</a> to visit.

