import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSongs';
import { Songs } from './Context';
import DataSongs from './data/songs.json';
import Playing from './components/Playing';
import { useState } from 'react';

function App() {
   const [song, setSong] = useState(DataSongs[0]);

   const handleSetSong = (idSong) => {
      const song = DataSongs.find((song) => song.id === idSong);
      setSong(song);

      if (!song) {
         setSong(DataSongs[0]);
      } else {
         setSong(song);
      }
   };

   return (
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
         <div className="App">
            <Navbar> </Navbar>
            <div className="grid grid-cols-3 bg-violet-900 h-screen-navbar-player overflow-hidden">
               <DetailSong></DetailSong>
               <ListSongs></ListSongs>
            </div>
            <Playing></Playing>
         </div>
      </Songs.Provider>
   );
}

export default App;
