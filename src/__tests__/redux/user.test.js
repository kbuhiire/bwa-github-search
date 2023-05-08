import userReducer, {
    setIsLoading,
    setSearchText,
    setSearchTerm,
    setUserResults,
    setUserDetails,
    setPaginationPage,
    setUsersPerPage
} from 'redux/user';

describe('userSlice', () => {
    describe('reducers', () => {
        describe('setIsLoading', () => {
            test('it should set isLoading to true', () => {
                const initialState = {
                    isLoading: false
                };
                const action = {type: setIsLoading.type, payload: true};
                const state = userReducer(initialState, action);
                expect(state.isLoading).toBe(true);
            });
            test('it should set isLoading to false', () => {
                const initialState = {
                    isLoading: true
                };
                const action = {type: setIsLoading.type, payload: false};
                const state = userReducer(initialState, action);
                expect(state.isLoading).toBe(false);
            });
        });
        describe('setPaginationPage', () => {
            test('it should set pagination page', () => {
                const initialState = {
                    page: 1
                };
                const newState = userReducer(initialState, setPaginationPage({ page: 2 }));
                expect(newState.page).toBe(2);
            });
        })
        describe('setUsersPerPage', () => {
            test('it should set users per page', () => {
                const initialState = {
                    perPage: 20
                };
                const newState = userReducer(initialState, setUsersPerPage({ perPage: 10 }));
                expect(newState.perPage).toBe(10);
            });
        })

        describe('setUserResults', () => {
            test('it should set user results', () => {
                const initialState = {
                    users: {
                        total_count: 0,
                        items: [],
                    }
                };
                const mockUsers = { total_count: 1, items: [{ id: 1, login: 'testuser' }] };
                const newState = userReducer(initialState, setUserResults({ users: mockUsers }));
                expect(newState.users).toEqual(mockUsers);
            });
        })

        describe('setSearchText', () => {
            test('it should set search text', () => {
                const initialState = {
                    searchText: ''
                };
                const newState = userReducer(initialState, setSearchText({ searchText: 'test' }));
                expect(newState.searchText).toBe('test');
            });
        })

        describe('setSearchTerm', () => {
            test('it should set search term', () => {
                const initialState = {
                    searchTerm: ''
                };
                const newState = userReducer(initialState, setSearchTerm({ searchTerm: 'test' }));
                expect(newState.searchTerm).toBe('test');
            });
        })

        describe('setUserDetails', () => {
            test('it should set user details', () => {
                const initialState = {
                    userDetails: {}
                };
                const mockUser = { id: 1, login: 'testuser' };
                const newState = userReducer(initialState, setUserDetails(mockUser));
                expect(newState.userDetails).toEqual(mockUser);
            });
        })

    });

})