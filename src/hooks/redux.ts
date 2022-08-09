import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux"; 
import { AppDispatch, RootState } from "../store/store";


export const useAppDispatch = () => useDispatch<AppDispatch>(); //хук/типизированный диспатч, возвр-ет диспатч
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector //хук-типизированный селектор
//благодаря типизации будем знать какого типа state, какие у нас есть редьюсеры, какие поля есть в состоянии каждого редьюсера, 