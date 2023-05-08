import {useLocation} from "react-router-dom";


export const useQueryParam = () => {
    const searchStr = useLocation().search

    return parseInt(searchStr?.split("=").pop(), 10) || 0
}