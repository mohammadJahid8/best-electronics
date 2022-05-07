import React, { useEffect, useState } from 'react';

const useInventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://guarded-reef-79088.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return [items, setItems];
};


export default useInventory;