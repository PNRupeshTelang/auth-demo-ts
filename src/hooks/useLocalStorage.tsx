import { useState, useEffect } from 'react'
import { decryptData, encryptData } from '../utils/Encryption';

export function useLocalStorage<T>(key: string, initialValue?: T)
    : [T, (value: T) => void] {
    const [value, setValue] = useState(() => {
        return JSON.parse(localStorage.getItem(key)) || (initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue]
}

export function useLocalStorageSecured(key: string, initialValue: any, secretKey: "asdfghklj091823098") {
    const [value, setValue] = useState(() => {
        return decryptData(localStorage.getItem(key), secretKey) || (initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, encryptData(value, secretKey));
    }, [value, key]);

    return [value, setValue]
}

