import {create} from 'zustand';


const useStore = create((set)=>({

texto:false,
color:false,

cambiarColor:()=>set((state)=>({color:!state.color})),
cambiarTexto:()=>set((state)=>({texto:!state.texto})),
}))
export default useStore;