const firstPic = document.querySelector(".first-pic");
const secondPic = document.querySelector(".second-pic");
const movTitle1 = document.querySelector(".mov-title1");
const movTitle2 = document.querySelector(".mov-title2");
const movOverview1 = document.querySelector(".mov-overview1");
const movOverview2 = document.querySelector(".mov-overview2");

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    640: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  },
});

const movieData = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=68ca37c1d94a4efaab7a7bdf7d26e7bb"
  );
  const data = await res.json();
  const movies = data.results;

  const validMovies = movies.filter(
    (movie) => movie?.poster_path && movie.original_title && movie.overview
  );

  const [index1, index2] = getRandomIndexes(validMovies.length);
  const movie1 = validMovies[index1];
  const movie2 = validMovies[index2];

  firstPic.innerHTML = `<div
        class="h-screen bg-no-repeat bg-cover bg-center object-cover md:hidden"
        style="background-image: url('https://image.tmdb.org/t/p/w500${movie1.poster_path}')"
      ></div>`;
  secondPic.innerHTML = `<div
        class="h-screen bg-center lg:bg-top bg-no-repeat hidden md:block md:bg-cover"
        style="background-image: url('https://image.tmdb.org/t/p/w500${movie2.poster_path}')"
      ></div>`;
  movTitle1.textContent = movie1.original_title;
  movTitle2.textContent = movie2.original_title;
  movOverview1.textContent = movie1.overview;
  movOverview2.textContent = movie2.overview;
};

setInterval(movieData, 3000);
// movieData();

function getRandomIndexes(max) {
  const index1 = Math.floor(Math.random() * max);
  let index2;
  do {
    index2 = Math.floor(Math.random() * max);
  } while (index2 === index1);
  return [index1, index2];
}
