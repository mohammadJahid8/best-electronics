import React, { useEffect, useState } from 'react';

const useItemDetail = (itemId) => {
    const [item, setItem] = useState({});


    useEffect(() => {
        fetch(`https://guarded-reef-79088.herokuapp.com/items/${itemId}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemId])

    // console.log(item);
    return [item, setItem];
};

export default useItemDetail;
