import {BASE_URL} from "./constants";

export const fetchUsersApi = ({perPage, page, orgQuery, searchText}) => {
    const BASE_QUERY = `${BASE_URL}=${perPage}&page=${page}&q`
    const url = orgQuery ?
        `${BASE_QUERY}=${searchText}+type:org` : `${BASE_QUERY}=${searchText}+type:user`

    return fetch(url)
        .then((res) => {
            if(res.status === 200) return res.json();
            else throw new Error("Invalid request");
        })
}

export const getDetailsApi = ({username}) => {
    const url = `https://api.github.com/users/${username}`

    return fetch(url)
        .then((res) => {
            if(res.status === 200) return res.json()
            else throw new Error("Invalid request")
        })
}