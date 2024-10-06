// const movies = [
//     { name: 'Avatar', category: 'film', image: 'https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg', video: 'https://www.youtube.com/embed/6ziBFh3V1aM' },
//     { name: 'Titanic', category: 'film', image: 'https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_.jpg', video: 'https://www.youtube.com/embed/kVrqfYjkTdQ' },
//     { name: 'Inception', category: 'film', image: 'https://static.wikia.nocookie.net/iepfanon/images/c/c6/Tom_and_Jerry_-_Poster.png/revision/latest?cb=20240105180313', video: 'https://www.youtube.com/embed/YoHD9XEInc0' },
//     { name: 'The Dark Knight', category: 'film', image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg', video: 'https://www.youtube.com/embed/EXeTwQWrcwY' },
//     { name: 'Game of Thrones', category: 'serial', image: 'https://image.tmdb.org/t/p/w500/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg', video: 'https://www.youtube.com/embed/BpJYNVhGf1s' },
//     { name: 'Breaking Bad', category: 'serial', image: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', video: 'https://www.youtube.com/embed/lrcqbavlbyQ' },
//     { name: 'Lion King', category: 'multfilm', image: 'https://image.tmdb.org/t/p/w500/2OeSLidqqrx0xGpJ5MKRXGlJtxo.jpg', video: 'https://www.youtube.com/embed/7TavVZMewpY' },
//     { name: 'Frozen', category: 'multfilm', image: 'https://image.tmdb.org/t/p/w500/jIjdFXKUNtdf1bwqMrhearpyjMj.jpg', video: 'https://www.youtube.com/embed/TbQm5doF_Uc' },
// ];

// function displayMovies(category = 'film') {
//     const moviesSection = document.getElementById('movies-section');
//     moviesSection.innerHTML = ''; // Sektsiyani tozalaymiz

//     const filteredMovies = movies.filter(movie => movie.category === category);

//     filteredMovies.forEach(movie => {
//         const movieDiv = document.createElement('div');
//         movieDiv.classList.add('movie');
        
//         const movieImg = document.createElement('img');
//         movieImg.src = movie.image;
        
//         const movieTitle = document.createElement('h3');
//         movieTitle.textContent = movie.name;
        
//         const watchButton = document.createElement('button');
//         watchButton.textContent = "Ko'rish";
//         watchButton.addEventListener('click', () => playMovie(movie.video));
        
//         movieDiv.appendChild(movieImg);
//         movieDiv.appendChild(movieTitle);
//         movieDiv.appendChild(watchButton);
//         moviesSection.appendChild(movieDiv);
//     });
// }

// document.getElementById('filmlar').addEventListener('click', () => displayMovies('film'));
// document.getElementById('seriallar').addEventListener('click', () => displayMovies('serial'));
// document.getElementById('multfilmlar').addEventListener('click', () => displayMovies('multfilm'));

// document.getElementById('search').addEventListener('input', function() {
//     const searchTerm = this.value.toLowerCase();
//     const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(searchTerm));

//     const moviesSection = document.getElementById('movies-section');
//     moviesSection.innerHTML = '';

//     filteredMovies.forEach(movie => {
//         const movieDiv = document.createElement('div');
//         movieDiv.classList.add('movie');
        
//         const movieImg = document.createElement('img');
//         movieImg.src = movie.image;
        
//         const movieTitle = document.createElement('h3');
//         movieTitle.textContent = movie.name;
        
//         const watchButton = document.createElement('button');
//         watchButton.textContent = "Ko'rish";
//         watchButton.addEventListener('click', () => playMovie(movie.video));
        
//         movieDiv.appendChild(movieImg);
//         movieDiv.appendChild(movieTitle);
//         movieDiv.appendChild(watchButton);
//         moviesSection.appendChild(movieDiv);
//     });
// });

// // Modal oynani ko'rsatish uchun funksiya
// function playMovie(videoUrl) {
//     const modal = document.getElementById('modal');
//     const modalBody = document.getElementById('modal-body');
//     modalBody.innerHTML = `<iframe width="100%" height="400" src="${videoUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
//     modal.style.display = 'flex';
// }

// // Modal oynani yopish
// const modal = document.getElementById('modal');
// const closeModal = document.querySelector('.close');
// closeModal.addEventListener('click', () => {
//     modal.style.display = 'none';
//     document.getElementById('modal-body').innerHTML = ''; // Modalni tozalaymiz
// });

// // Boshlang'ich holatda filmlarni ko'rsatamiz
// displayMovies();
