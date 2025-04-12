import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
    "getPost",
    async function(text,{dispatch}){
        await fetch(`https://api.telegram.org/bot6990935703:AAEgSTluzPSGkpm2WXQFk6Se7gax7_Be2TI/sendMessage?chat_id=-4114695078&text=${text}`)
    }
)

const HeaderSlice = createSlice({
    name: "postSlice",
    initialState: {
        lang: "ru",
        isLang: false,
        isMenu: false,
        isModal: false
    },
    reducers: {
        setLang:(state,action)=>{state.lang = action.payload},
        setIsLang:(state,action)=>{state.isLang = !state.isLang},
        setIsMenu:(state,action)=>{state.isMenu = !state.isMenu},
        setIsModal:(state,action)=>{state.isModal = !state.isModal}
    },
});

export const {setLang,setIsLang,setIsMenu,setIsModal} = HeaderSlice.actions
export default HeaderSlice.reducer;