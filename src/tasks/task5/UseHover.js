import {useCallback, useEffect, useRef, useState} from "react";

const useHover = (val) => {
    const [isHover, setIsHover] = useState()
    const ref = useRef(null)

    const onFocus = () => {
        setIsHover((isHover) => !isHover);
    }

    const callbackRef = useCallback((node) => {
        if(!ref.current){
            ref.current.removeEventListener('focus', onFocus)
        }
        ref.current =node;
        if(node){
            node.addEventListener('focus',)
        }
    }  ,[])

    return [callbackRef,isHover]

}

export default useHover