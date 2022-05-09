import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '100px' }} className='w-100 d-flex justify-content-center align-items-center mt-5 mb-5 pt-5'   >

            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="dark" />
        </div>
    );
};

export default Loading;