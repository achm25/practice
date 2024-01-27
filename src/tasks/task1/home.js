import React, { useState } from 'react';
import useTimer from "./UseTimer";

function show(){
    console.log('this is callback text');
}

const Home = () => {
    const [delay,setDelay] = useState(1000)
    useTimer(show,delay);

    return (
        <h1>
            test
        </h1>
    );


}


export default Home;