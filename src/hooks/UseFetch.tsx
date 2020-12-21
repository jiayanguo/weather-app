import { useEffect, useState } from "react"
type Result = {
    data: any
    error: any,
    isLoading: boolean,
    setUrl: any,
}

const UseFetch = (initUrl: string) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState(initUrl);
    

    useEffect( () => {
        if(!url) return;
        setIsLoading(true);
        setData(null);
        setError('');

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setIsLoading(false);
            if (data.cod >= 400) {
                setError(data.message);
                return;
            }
            setData(data);
        })
        .catch((error) => {
            setIsLoading(false);
            setError(error);
        });
    }, [url]);

    let result: Result = {data, error, isLoading, setUrl};
    return result;
};

export default UseFetch;