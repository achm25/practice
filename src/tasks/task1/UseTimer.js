import {useEffect, useRef} from "react";

const useTimer = (callback, delay) => {

    const callbackRef = useRef(callback)
    callbackRef.current = callback;

    useEffect(()=>{
        const timeoutId =  setTimeout(() => {callbackRef.current()},delay)
        return () => {
            clearTimeout(timeoutId)
        }
    },[delay])
}

export default useTimer