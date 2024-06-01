import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

export function useQueryString(key: string) {
    const [searchParam, setSearchParam] = useSearchParams();

    const [value, setValue] = useState(() => {
        return searchParam.get(key);
    });

    useEffect(() => {
        searchParam.set(key, value);
        setSearchParam(searchParam);
    }, [value, key]);

    return [value, setValue]
}

