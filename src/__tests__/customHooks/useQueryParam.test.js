import {renderHook} from "@testing-library/react";
import {useLocation} from "react-router-dom";
import {useQueryParam} from "customHooks/useQueryParam";

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn(),
}));

describe('useQueryParam', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('it should return 0 when there is no query parameter', () => {
        useLocation.mockReturnValueOnce({ search: '' });
        const { result } = renderHook(() => useQueryParam());
        expect(result.current).toEqual(0);
    });
    test('it should return the correct integer value when a valid query parameter is present', () => {
        useLocation.mockReturnValueOnce({ search: '?param=123' });
        const { result } = renderHook(() => useQueryParam());
        expect(result.current).toEqual(123);
    });
    test('it should return 0 when an invalid query parameter is present', () => {
        useLocation.mockReturnValueOnce({ search: '?param=undefined' });
        const { result } = renderHook(() => useQueryParam());
        expect(result.current).toEqual(0);
    });
});