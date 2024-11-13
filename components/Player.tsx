"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activated);
  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activated) {
    return null;
  }
  return <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
    <PlayerContent key={songUrl} songUrl={songUrl} song={song}/>
  </div>;
};

export default Player;
