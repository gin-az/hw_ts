import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IRootState } from "../store/reducers";
/**                                             Передаем интерфейс Store (<IRootState>)*/
export const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;
