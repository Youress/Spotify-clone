"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";

interface SearchProps {
  songs: Song[];
}

const SeacrhContent: React.FC<SearchProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs)
  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No Song Found
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem data={song} onClick={() => onPlay(song.id)} />
          </div>
          <LikeButton songId={song.id}/>
        </div>
      ))}
    </div>
  );
};

export default SeacrhContent;
