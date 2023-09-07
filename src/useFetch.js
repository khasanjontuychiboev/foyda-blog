import { useEffect, useState } from "react";

const useFetch = () => {        
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(' http://localhost:8000/blogs')
        .then(res=>{
            if(!res.ok){
                throw Error('Could not fetch data for resource.');
            }
            return res.json();
        })
        .then(res=>{
            setData(res);
            setIsLoading(false);
            setError(null);
        })
        .catch(err => {
            setError(err.message);
            setIsLoading(false);
        });

        console.log('useEffect is done!');
    }, []);

}

export default useFetch;