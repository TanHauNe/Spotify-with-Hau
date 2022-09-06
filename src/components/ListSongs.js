import React, { useContext, useState, useEffect } from 'react';
import { Songs } from '../Context';

export default function ListSongs() {
   const { DataSongs, handleSetSong, song } = useContext(Songs);
   const [idSong, setIdSong] = useState(0);

   const handlePlaySong = (idSong) => {
      setIdSong(idSong);
      handleSetSong(idSong);
   };

   useEffect(() => {
      setIdSong(song.id);
      return () => {
         console.log('ERORR');
      };
   }, [song]);

   return (
      <div className="col-span-2 overflow-y-scroll">
         <table className="table-auto w-full">
            <thead className="text-violet-200 h-12">
               <tr>
                  <th className="w-[10%]"></th>
                  <th>Title</th>
                  <th className="w-[20%]">Author</th>
                  <th className="w-[10%]">
                     <i className="fa fa-download"></i>
                  </th>
               </tr>
            </thead>
            <tbody>
               {DataSongs.map((song, index) => (
                  <tr
                     key={index}
                     className={`bg-violet-500 h-12 hover:bg-violet-600 ${
                        idSong === song.id && 'bg-violet-700 text-violet-200'
                     }`}
                     onClick={() => handlePlaySong(song.id)}
                  >
                     <td className="text-center">{song.id + 1}</td>
                     <td>{song.name}</td>
                     <td className="text-center">{song.author}</td>
                     <td className="text-center">
                        <a href={song.url}>
                           <i className="fa fa-download"></i>
                        </a>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
