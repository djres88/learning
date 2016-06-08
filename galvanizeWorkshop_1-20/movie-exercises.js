//USING FOR-LOOPS
function logSummaries(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]["title"] + ", " + arr[i]["releaseYear"]);
  }
}

logSummaries(movies);

//USING FOREACH:
function logSummariesForEach(arr) {
  arr.forEach(function(movie) {
    console.log(movie.title + ", " + movie.releaseYear); // could do bracket notation again; just switching it up for variety's sake.
  });
}

logSummariesForEach(movies);
//Note that forEach returns undefined (diff from other iterators).
//Also good to know:
[1,2,3,4].forEach(function(num, idx, arr) {
  console.log(idx, ": ", num, "full array:", arr);
});

//USING MAP:

function getTitles(arr) {
  //takes an array of movie objects
  return arr.map(function(movie) { // NOTE: You need a return statement here.
    //returns an array of movie titles
    return movie.title;
  });
};

getTitles(movies);

function reformatRuntimes(arr) {
  //takes an array of movie objects,
  return arr.map(function(movie) {
    //returns an array of movie objects with runtimes in "HH:MM" format
    movie.runtime =  '0' + Math.floor(movie.runtime / 60) + ":" + movie.runtime % 60;
    return movie;
  });
}

reformatRuntimes(movies);

//USING FILTER

function generalAudienceMovies(arr) {
  //returns an array of "G" rated films
  return arr.filter(function(movie) {
    return movie.rating === "G";
  });
}

function ninetiesMovies(arr) {
  // returns an array of films released in the 1990s
  return arr.filter(function(movie) {
    return movie.releaseYear >= 1990 && movie.releaseYear < 2000;
  });
}

function greatMovies(arr) {
  //returns an array of films with 90% freshness (or better)
  return arr.filter(function(movie) {
    return movie.freshness >= 0.9;
  });
}

function terribleMovies(arr) {
  //returns an array of films with 10% freshness (or worse)
  return arr.filter(function(movie) {
    return movie.freshness <= 0.1;
  });
}

generalAudienceMovies(movies);
ninetiesMovies(movies);
greatMovies(movies);
terribleMovies(movies);

//USING REDUCE

function marathonTime(arr) {
  //Returns a sum of movie runtimes
  return arr.reduce(function(prev, curr) {
    return prev + curr.runtime; // why does prev not need a runtime?
  }), 0;
};
//OR
function marathonTime(arr) {
  //Returns a sum of movie runtimes
  return arr.map(movie ==> movie.runtime).reduce((prev, cur) => prev + cur);
};

marathonTime(movies);

function ratingCounts(arr) {
  // returns an object with keys equal to movie ratings, and values equal to the number of movies in the array with a given rating.

  //For example, if you have an array with 2 movies rated "G" and 3 movies rated "PG", the output should be: {"G": 2, "PG": 3}
  return arr.reduce(function(prev, cur) {
    prev[cur.rating] = prev[cur.rating] + 1 || 1;
    return prev;
  }, {});
}

//CHAINING ITERATORS
