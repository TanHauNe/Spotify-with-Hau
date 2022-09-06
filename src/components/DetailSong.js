import React, { useContext } from 'react';
import { Songs } from '../Context';

export default function DetailSong() {
   const { song } = useContext(Songs);

   return (
      <div className="col-span-1 p-3">
         <h2 className="text-violet-400 font-bold">Now playing</h2>
         <h2 className="text-violet-200 text-2xl">{song.name}</h2>
         <div className="w-[240px] m-auto mt-10">
            <img
               className="w-full"
               src={song.links.images[0].url}
               alt=""
            ></img>
         </div>
         <div className="flex justify-evenly items-center mt-10">
            <img
               className="w-[50px] rounded-full"
               src={song.links.images[1].url}
               alt=""
            ></img>
            <span className="text-xl text-violet-200">{song.author}</span>
         </div>
      </div>
   );
}
