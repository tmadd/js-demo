var movies = [
    {
        title: "Barry Lyndon",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Star Wars",
        hasWatched: true,
        rating: 4
    },
    {
        title: "Meow",
        hasWatched: false,
        rating: 1
    },
    {
        title: "The Great Gatsby",
        hasWatched: false,
        rating: 3
        
    }
]



function buildString(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result += "watched ";
    } else {
        result += "not watched ";
    }
    result += "\"" + movie.title + "\" ";
    result += movie.rating + " stars";
    return result;
}
movies.forEach(function(movie){
   
    console.log(buildString(movie));
});