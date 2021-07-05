import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../store/actions";
/** Хук useActions берет useDispatch оборачивает все возможные actionCreated и dispatch'и и  (через стандартную ф-ю bindActionCreators в redux) */
export const useActions = () => {
 const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
