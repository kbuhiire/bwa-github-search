import { renderHook, act } from '@testing-library/react';
import { useDarkMode } from 'customHooks/useDarkMode';

jest.spyOn(window.localStorage.__proto__, 'getItem');
jest.spyOn(window.localStorage.__proto__, 'setItem');

describe('useDarkMode', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should set the initial theme to light if the local storage is empty', () => {
        const { result } = renderHook(() => useDarkMode());
        expect(result.current[0]).toEqual('light');
        expect(window.localStorage.getItem).toHaveBeenCalledWith('theme');
        expect(window.localStorage.setItem).toHaveBeenCalledWith('theme', 'light');
    });

    it('should set the initial theme to the local storage value if present', () => {
        window.localStorage.setItem('theme', 'dark');
        const { result } = renderHook(() => useDarkMode());
        expect(result.current[0]).toEqual('light');
        expect(window.localStorage.getItem).toHaveBeenCalledWith('theme');
    });

    it('should toggle between light and dark mode when themeToggler is called', () => {
        const { result } = renderHook(() => useDarkMode());
        expect(result.current[0]).toEqual('light');
        act(() => {
            result.current[1]();
        });
        expect(result.current[0]).toEqual('dark');
        expect(window.localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
        act(() => {
            result.current[1]();
        });
        expect(result.current[0]).toEqual('light');
        expect(window.localStorage.setItem).toHaveBeenCalledWith('theme', 'light');
    });

    it('should set mountedComponent to true after the component mounts', () => {
        const { result } = renderHook(() => useDarkMode());
        act(() => {
            result.current[1]();
        });
        expect(result.current[2]).toEqual(true);
    });
});






