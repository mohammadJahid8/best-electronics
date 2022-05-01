import React, { useEffect, useState } from 'react';

const useItemDetail = (itemId) => {
    const [item, setItem] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${itemId}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])

    return [item];
};

export default useItemDetail;
