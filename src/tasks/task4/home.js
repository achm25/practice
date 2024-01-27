import {useMemo, useState} from "react";


const Home = () => {

    const [val,setVal] = useState();

    function onInputChange(event){
        let newVal = event.target.value;
        if(!'1234567890'.includes(newVal[newVal.length-1])){
            return;
        }
        newVal = newVal.replace(/\D/g,'');
        if(newVal.length > 3) {
            newVal = `(${newVal.slice(0,3)})${newVal.slice(3)}`
        }
        setVal(newVal)
    }

    return (
        <input
            type='text'
            name='phone'
            required
            onChange={onInputChange}
            value={val}
        />
    )
}

export default Home
