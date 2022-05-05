import React, { useEffect, useState } from 'react';

const useInventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return [items];
};


export default useInventory;