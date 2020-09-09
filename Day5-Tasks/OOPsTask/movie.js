class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG";
    }
    getPG(array) {
        let res = array.filter(item => item.rating === "PG");
        return res;
    }
    showDetails() {
        console.log(this.title, this.studio, this.rating);
    }
}

let movie = new Movie("Casino Royale", "Eon Productions");
movie.showDetails();

console.log(movie.getPG([
    {title: "Dr.Strange", studio: "Marvel", rating: "PG"},
    {title: "Avengers", studio: "Marvel", rating: "PG13"},
    {title: "Avengers2", studio: "Marvel", rating: "UG"},
    {title: "Black Widow", studio: "Marvel", rating: "PG"},
]));