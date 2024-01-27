import useSWR from "./UseSWR";

async function fetcher (){
    console.log('task2')
}

const Home = () => {
    const {data, error} = useSWR('task2',fetcher )

    return (
        <h1>
            test2
        </h1>
    )
}

export default Home
