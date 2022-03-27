import {createSlice} from "@reduxjs/toolkit";
import {saveToStore} from "./_save";

const storeName = "app"

const initialState = localStorage.getItem(storeName) ? JSON.parse(localStorage.getItem(storeName)) : {
    loading: false,
    spr: {}
}

export const applicationStore = createSlice({
    name: storeName,
    initialState,
    reducers: {
        loadingEnable: (state) => {
            state = {
                ...state,
                loading: true
            }
            return state
        },
        loadingDisable: (state) => {
            state = {
                ...state,
                loading: false
            }
            return state
        },
        setSprPodr: (state, action) => {
            state = {
                ...state,
                spr: {
                    ...state.spr,
                    unit: action.payload
                }
            }
            saveToStore(state, storeName)
            return state
        },
        setSprPrava: (state, action) => {
            state = {
                ...state,
                spr: {
                    ...state.spr,
                    access: action.payload
                }
            }
            saveToStore(state, storeName)
            return state
        }
    }
})

export const {loadingEnable, loadingDisable, setSprPodr, setSprPrava} = applicationStore.actions
export default applicationStore.reducer