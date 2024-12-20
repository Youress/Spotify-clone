import Image from "next/image";
import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import LikedContent from "./components/LikedContent";

export const revalidate = 0;
const LikedSongs = async () => {
  const songs = await getLikedSongs();
  return (
    <div className="bg-neutral-900 rounded-lg w-full h-full overflow-y-auto overflow-hidden">
      <Header>
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div className="relative h-32 w-32">
              <Image fill src='/images/liked.png' alt="playlist" className="object-cover rounded-md"/>
            </div>
            <div className="flex flex-col gp-y-2 mt-4 md:mt-0">
                <p className="hidden md:block font-semibold text-sm">PlayList</p>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
                    Liked Songs 
                </h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent songs={songs}/>
    </div>
  );
};

export default LikedSongs;
