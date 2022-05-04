import React, { useEffect, useState } from 'react';

const useItemDetail = (itemId) => {
    const [item, setItem] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/items/${itemId}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])

    return [item];
};

export default useItemDetail;
