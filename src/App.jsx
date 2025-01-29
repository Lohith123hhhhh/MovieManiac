  import React from 'react';
  import './App.css';
  import fire from './assets/fire.png'
  import star from './assets/glowing-star.png'
  import face from './assets/partying-face.png'
  import Navbar from './components/NavBar/Navbar';
  import MovieList from './components/NavBar/MovieList/MovieList';
  const App = () => {
      return (
          <div className="app">
            <Navbar/>
          <main><MovieList type="popular" title="Popular" emoji={fire}/>
          <MovieList type="top_rated" title="Top Rated" emoji={star}/>
          <MovieList type="upcoming" title="Upcoming" emoji={face}/>
          </main>

          </div>
      )
  }
  export default App;
