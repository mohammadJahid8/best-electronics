import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../HomePage/Footer/Footer';
import Header from '../HomePage/Header/Header';
import './AddItem.css'

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)

        fetch(`http://localhost:5000/items`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <>
            <Header />
            <div className="mx-auto w-50">
                <h2 className='text-center'>Please Add a New Item</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-2' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 20 })} />
                    <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("image")} />
                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                    <div className='d-flex justify-content-center'>
                        <input type="submit" className='w-50' />
                    </div>
                </form>
            </div>
            <Footer />

        </>
    );
};

export default AddItem;