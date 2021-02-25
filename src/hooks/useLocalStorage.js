import {useState} from 'react';

function useLocalStorage(key, initialValue, initialCallback) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            const value = item ? JSON.parse(item) : initialValue instanceof Function ? initialValue() : initialValue;
            initialCallback && initialCallback(value);
            return value;
        } catch (error) {
            console.log(error);
            return initialValue instanceof Function ? initialValue() : initialValue;
        }
    });
    const setValue = value => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue];
}

export {useLocalStorage};
