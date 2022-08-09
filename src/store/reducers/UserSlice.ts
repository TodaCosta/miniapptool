import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import { fetchUsers } from './ActionCreators';
//slice содержит экшн криэйторы и редьюсеры
//в toolkeit есть slice - обертка над редьюсерами, кот. добавляеет доп. функционал и упрощает работу
//Что бы мы не делали внутри слайсов, в конце концов они генерируют обычные редьюсеры и действия,
//которые затем передаются в Redux. То есть, слайсы не добавляют никаких новых возможностей в сам Redux.
//Они автоматизируют рутину, сокращают количество кода и предоставляют более удобные "ручки" для управления действиями и состоянием.
interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user', //у каждого слайса должно бытть уникальное название
    initialState, //дефолтное значение состояния
    reducers: { //аналогично конструкции swith/case. Каждый кейс идёт как отдельный reducer, и внутри него будем определять как изменим состояние
        //В toolkit мы можем изменить конкретное поле у состояния
        
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {//успеш.загр.
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;  
        },
        [fetchUsers.pending.type]: (state) => {//загрузка
            state.isLoading = true; 
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {//ошибка
            state.isLoading = false;
            state.error = action.payload 
        }
    }
})
//после созд-я слайса мы можем отдельно вытащить из него редюсер и экшнкриэйторы
export default userSlice.reducer; //будет называться userReducer (подставляет имя name из Slice, Reducer по умолчанию)
