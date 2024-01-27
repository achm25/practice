import {useEffect, useRef, useState} from "react";

const usePrev = (val) => {
    const prev = useRef(undefined);

    useEffect(()=>{
        prev.current = val;
    },[val])

    return prev.current;

    // alternative
    // const previous = useRef<T>();
    // const toReturn = previous.current;
    // previous.current = value;
    // return toReturn;

}

export default usePrev