import { createSlice } from '@reduxjs/toolkit';

const HeaderSlice = createSlice({
    name: "postSlice",
    initialState: {
        lang: "RU",
        isLang: false,
        isMenu: false
    },
    reducers: {
        setLang:(state,action)=>{state.lang = action.payload},
        setIsLang:(state,action)=>{state.isLang = !state.isLang},
        setIsMenu:(state,action)=>{state.isMenu = !state.isMenu}
    },
});

export const {setLang,setIsLang,setIsMenu} = HeaderSlice.actions
export default HeaderSlice.reducer;