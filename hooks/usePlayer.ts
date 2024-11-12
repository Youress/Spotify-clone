import { create } from "zustand";

interface PlayerStore {
    ids : string[];
    activated? : string;
    setId:(id:string)=>void;
    setIds:(ids:string[])=>void;
    reset : ()=>void;
}

const usePlayer = create<PlayerStore>((set)=>({
    //playlist of songs ids
    ids : [],
    //the current clicked song
    activated : undefined,
    setId : (id : string)=> set({activated:id}),
    setIds : (ids:string[])=> set({ids:ids}),
    reset:()=>set({ids:[],activated:undefined})
}));

export default usePlayer