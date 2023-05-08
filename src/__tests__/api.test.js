import {fetchUsersApi, getDetailsApi} from "../api";

describe('Apis', () => {
    describe('fetchUsersApi', () => {
        beforeEach(() => {
            jest.resetAllMocks();
        });

        test('it should fetch users with the correct URL when orgQuery is false', async () => {
            const perPage = 20;
            const page = 1;
            const orgQuery = false;
            const searchText = 'john';

            const mockResponse = { data: [] };
            global.fetch = jest.fn().mockResolvedValue({
                json: () => Promise.resolve(mockResponse),
                status: 200,
            });

            await fetchUsersApi({ perPage, page, orgQuery, searchText });

            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(
                `https://api.github.com/search/users?per_page=${perPage}&page=${page}&q=${searchText}+type:user`
            );
        });

        test('it should fetch organizations with the correct URL when orgQuery is true', async () => {
            const perPage = 20;
            const page = 1;
            const orgQuery = true;
            const searchText = 'john';

            const mockResponse = { data: [] };
            global.fetch = jest.fn().mockResolvedValue({
                json: () => Promise.resolve(mockResponse),
                status: 200,
            });

            await fetchUsersApi({ perPage, page, orgQuery, searchText });

            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(
                `https://api.github.com/search/users?per_page=${perPage}&page=${page}&q=${searchText}+type:org`
            );
        });

        test('it should throw an error if the response status is not 200', async () => {
            const perPage = 20;
            const page = 1;
            const orgQuery = false;
            const searchText = 'john';

            global.fetch = jest.fn().mockResolvedValue({
                json: () => Promise.resolve({}),
                status: 400,
            });

            await expect(fetchUsersApi({ perPage, page, orgQuery, searchText })).rejects.toThrow(
                'Invalid request'
            );
        });
    });

    describe('getDetailsApi', () => {
        beforeEach(() => {
            jest.resetAllMocks();
        });

        test('it should fetch user details with the correct URL', async () => {
            const username = 'johndoe';

            const mockResponse = { data: { name: 'John Doe' } };
            global.fetch = jest.fn().mockResolvedValue({
                json: () => Promise.resolve(mockResponse),
                status: 200,
            });

            const details = await getDetailsApi({ username });

            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(`https://api.github.com/users/${username}`);
            expect(details.data).toEqual(mockResponse.data);
        });

        test('it should throw an error if the response status is not 200', async () => {
            const username = 'johndoe';

            global.fetch = jest.fn().mockResolvedValue({
                json: () => Promise.resolve({}),
                status: 400,
            });

            await expect(getDetailsApi({ username })).rejects.toThrow('Invalid request');
        });
    });


})