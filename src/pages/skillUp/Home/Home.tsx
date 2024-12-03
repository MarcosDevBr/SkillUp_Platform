
import { useEffect, useState } from 'react';
import HomeView from './Home.view';

export default function Home() {

    const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('Component mounted');
    //         setIsLoading(false)
    //     },1000)
    // }, [])

    return (
        <HomeView isLoading={isLoading}/>
    )
}
