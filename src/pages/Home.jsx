import {
  Search,
  MapPin,
  Menu,
  ChevronDown,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const movies = [
  {
    title: "Demon Slayer",
    genre: "Action • Anime • Fantasy",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Avengers: Endgame",
    genre: "Action • Adventure • Sci-Fi",
    image:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    title: "Interstellar",
    genre: "Adventure • Drama • Sci-Fi",
    image:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    title: "The Dark Knight",
    genre: "Action • Crime • Drama",
    image:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    title: "Spider-Man",
    genre: "Action • Adventure • Fantasy",
    image:
      "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  },
];

function Home() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const user = JSON.parse(localStorage.getItem("bookmyshowUser"));
  const isLoggedIn =
    localStorage.getItem("bookmyshowLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("bookmyshowLoggedIn");
    navigate("/");
  };

  const filteredMovies = movies.filter((movie) =>
    `${movie.title} ${movie.genre}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-inner">

          <Link to="/" className="logo">
            book<span>my</span>show
          </Link>

          <div className="search">
            <Search size={19} />

            <input
              type="text"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="nav-actions">

            <button className="city">
              <MapPin size={16} />
              Chennai
              <ChevronDown size={14} />
            </button>

            {isLoggedIn ? (
              <div className="user-area">
                <span className="user-name">
                  Hi, {user?.name || "User"}
                </span>

                <button
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="sign-btn">
                Sign in
              </Link>
            )}

            <Menu size={24} />

          </div>
        </div>
      </header>

      {/* SECOND NAVBAR */}
      <nav className="subnav">
        <div>
          <a href="#movies">Movies</a>
          <a href="#events">Events</a>
          <a href="#sports">Sports</a>
          <a href="#plays">Plays</a>
          <a href="#activities">Activities</a>
        </div>

        <div>
          <a href="#offers">Offers</a>
          <a href="#gift">Gift Cards</a>
          <a href="#corporate">Corporates</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">

            <p>BOOK YOUR EXPERIENCE</p>

            <h1>
              Movies. Events.
              <br />
              Unforgettable Moments.
            </h1>

            <span>
              Discover the best entertainment happening around you.
            </span>

            <button>Explore Now</button>

          </div>
        </div>
      </section>

      <main>

        {/* MOVIES */}
        <section className="section" id="movies">

          <div className="heading">
            <h2>
              {searchTerm
                ? `Search Results for "${searchTerm}"`
                : "Recommended Movies"}
            </h2>

            {!searchTerm && <a href="#all">See All ›</a>}
          </div>

          {filteredMovies.length > 0 ? (
            <div className="movie-grid">

              {filteredMovies.map((movie) => (
                <article
                  className="movie-card"
                  key={movie.title}
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                  />

                  <h3>{movie.title}</h3>

                  <p>{movie.genre}</p>
                </article>
              ))}

            </div>
          ) : (
            <div className="no-results">
              <h3>No movies found</h3>
              <p>
                Try searching for another movie or genre.
              </p>
            </div>
          )}

        </section>

        {/* PROMOTIONAL BANNER */}
        {!searchTerm && (
          <>
            <section className="wide-banner">

              <div>
                <small>BOOKMYSHOW</small>

                <h2>
                  Find your next great experience.
                </h2>

                <p>
                  Movies, concerts, sports, comedy and much more.
                </p>
              </div>

              <button>
                Explore Events
              </button>

            </section>

            {/* CATEGORIES */}
            <section
              className="section"
              id="events"
            >

              <div className="heading">
                <h2>Explore Categories</h2>
                <a href="#all">See All ›</a>
              </div>

              <div className="categories">

                <div className="category">
                  <b>🎬</b>
                  <h3>Movies</h3>
                  <p>Latest releases</p>
                </div>

                <div className="category">
                  <b>🎤</b>
                  <h3>Events</h3>
                  <p>Live entertainment</p>
                </div>

                <div className="category">
                  <b>🏟️</b>
                  <h3>Sports</h3>
                  <p>Watch it live</p>
                </div>

                <div className="category">
                  <b>🎭</b>
                  <h3>Plays</h3>
                  <p>Theatre & drama</p>
                </div>

              </div>

            </section>
          </>
        )}

      </main>

      {/* FOOTER */}
      <footer>

        <div className="footer-inner">

          <div>
            <h2 className="logo">
              book<span>my</span>show
            </h2>

            <p>
              Your destination for movies and entertainment.
            </p>
          </div>

          <div>
            <h4>COMPANY</h4>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Careers</p>
          </div>

          <div>
            <h4>HELP</h4>
            <p>Privacy</p>
            <p>Terms & Conditions</p>
            <p>FAQs</p>
          </div>

        </div>

        <div className="copyright">
          © 2026 BookMyShow Frontend Project
        </div>

      </footer>
    </>
  );
}

export default Home;