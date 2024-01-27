import {useEffect, useMemo, useState} from "react";

const useSWR = (key, fetcher) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const res = useMemo(fetcher,[key,fetcher])

    useEffect( ()=>{
        if (res instanceof Promise) {
            setLoading(true)
            res.then(data => setData(data))
                .catch(err => setError(err))
                .finally(()=>{
                    setLoading(false)
            })
        }
    }, [fetcher, key])

    return {data, error, loading}

}

export default  useSWR