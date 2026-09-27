const Movie = require("../models/Movie");

const createMovie = async (req, res) => {
    try {
        const {
            title,
            description,
            genre,
            language,
            releaseDate,
            poster
        } = req.body;

        if (
            !title ||
            !description ||
            !genre ||
            !language ||
            !releaseDate ||
            !poster
        ) {
            return res.status(400).json({
                message: "All movie fields are required"
            });
        }

        const movie = await Movie.create({
            title,
            description,
            genre,
            language,
            releaseDate,
            poster
        });

        res.status(201).json({
            message: "Movie created successfully",
            movie
        });

    } catch (error) {
        console.error("Create movie error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
};


const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find().sort({
            createdAt: -1
        });

        res.status(200).json({
            movies
        });

    } catch (error) {
        console.error("Get movies error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
};


const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({
                message: "Movie not found"
            });
        }

        res.status(200).json({
            movie
        });

    } catch (error) {
        console.error("Get movie error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
};


module.exports = {
    createMovie,
    getMovies,
    getMovieById
};