import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";


//асинхронный экшнкриэйтер, мидлвэйр под капотом toolkit. Из ЭК не возвр-ем сразу экшн,
//а возвращаем другую ф-цию, кот. аргументом принимает dispatch, и уже из этой ф-ции будет производить синхронные действия


// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try{
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users') //<IUser[]> дженерик generic
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e: any) {
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
// }//это было, когда созвали свои криейторы

//ничего не диспачим, в слайсах есть спец ф-ция
//когда создаём createAsyncThunk сразу созд-ся 3 состояния для 3-х сценариев, кот мы обр-ли сами вручную(загр, успех, ошбка)

export const fetchUsers = createAsyncThunk(
    'user/fetchAll', //название асинхронной ф-ции
    async(_, thunkAPI) => {
        try{
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        return response.data;
        } catch(e){
            return thunkAPI.rejectWithValue("Не удалось загрузить")
        }
        
    }
)