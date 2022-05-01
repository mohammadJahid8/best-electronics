import React, { useEffect, useState } from 'react';

const useInventory = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setInfo(data));
    }, [])

    return [info];
};


export default useInventory;