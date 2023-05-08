import { createSlice } from "@reduxjs/toolkit";
import {fetchUsersApi, getDetailsApi} from "api";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: {
            total_count: 0,
            items: [],
        },
        userDetails: {},
        perPage: 20,
        isLoading: false,
        page: 1,
        searchText: "",
        searchTerm: "",
    },
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setPaginationPage: (state, action) => {
            state.page = action.payload.page;
        },
        setUsersPerPage: (state, action) => {
            state.perPage = action.payload.perPage;
        },
        setUserResults: (state, action) => {
            state.users = action.payload.users;
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload.searchText;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload.searchTerm;
        },
        setUserDetails: (state, action) => {
            state.userDetails = action.payload
        }
    },
});

export const fetchUsers = (payload) =>  (dispatch) => {
    try {
        const { searchText, searchTerm, perPage, page } = payload

        dispatch(setIsLoading(true))
        dispatch(setSearchText({searchText}))
        dispatch(setSearchTerm({searchTerm}))
        const orgQuery = searchTerm === 'orgs'
        fetchUsersApi({perPage, page, orgQuery, searchText})
            .then(results => {
                dispatch(setIsLoading(false))
                dispatch(setUserResults({users: {...results}}))
            }).catch(() => {
            dispatch(setIsLoading(false))
        })

    } catch (err) {
        dispatch(setIsLoading(false))
        throw new Error(err);
    }
};

export const getDetails = username => async dispatch => {
    try {
        dispatch(setIsLoading(true))
        getDetailsApi({ username })
            .then((results) => {
                dispatch(setIsLoading(false))
                dispatch(setUserDetails(results))
        }).catch(() => {
            dispatch(setIsLoading(false))
        })

    } catch (err) {
        dispatch(setIsLoading(false))
        throw new Error(err);
    }

}



// Action creators are generated for each case reducer function
export const {
    setUserResults,
    setIsLoading,
    setPaginationPage,
    setUsersPerPage,
    setSearchText,
    setSearchTerm,
    setUserDetails
} = userSlice.actions;

export default userSlice.reducer;
