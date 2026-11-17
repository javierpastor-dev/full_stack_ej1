import reactLogo from '../assets/react.svg'

export const genres = [
    "Acción",
    "Comedia",
    "Drama",
    "Terror",
    "Sci-Fi"
]

export const movies = [
    { id: 1, title: "Pelicula 1", genre: genres.at(0), rating: 5, year: 2001, description: "Descripcion 1", image: reactLogo, color: "#c28383" },
    { id: 2, title: "Pelicula 2", genre: genres.at(1), rating: 7, year: 2002, description: "Descripcion 2", image: reactLogo, color: "gold" },
    { id: 3, title: "Pelicula 3", genre: genres.at(2), rating: 8, year: 2003, description: "Descripcion 3", image: reactLogo, color: "teal" },
    { id: 4, title: "Pelicula 4", genre: genres.at(3), rating: 9, year: 2004, description: "Descripcion 4", image: reactLogo, color: "red" },
    { id: 5, title: "Pelicula 5", genre: genres.at(4), rating: 10, year: 2005, description: "Descripcion 5", image: reactLogo, color: "blue" }
];