import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import './AddItem.css'

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        const products = { ...data, email: user.email };
        fetch(`https://guarded-reef-79088.herokuapp.com/items`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                console.log(products);
            })
        reset();
    };
    return (
        <>

            <h2 className='text-center mt-5 all-titles pt-5 '>Please Add a Item</h2>
            <div className="pt-3">

                <form className="form-style-9" onSubmit={handleSubmit(onSubmit)}>
                    <ul>
                        <li>
                            <input type="text" className="field-style field-split align-left" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                            <input type="text" className="field-style field-split align-right" placeholder="Supplier" {...register("supplier", { required: true, maxLength: 20 })} />

                        </li>
                        <li>
                            <input type="email" className="field-style field-full align-none" placeholder="Email" value={user?.email} disabled />
                        </li>
                        <li>
                            <input type="number" className="field-style field-split align-right" placeholder="Quantity" {...register("quantity")} />
                            <input type="text" className="field-style field-split align-left" placeholder="Price" {...register("price")} />
                        </li>

                        <li>
                            <input type="text" className="field-style field-full align-none" placeholder="Image URL"  {...register("image")} />
                        </li>
                        <li>
                            <textarea className="field-style" placeholder="Description" {...register("description")}></textarea>
                        </li>
                        <li>
                            <input type="submit" value="Add Item" />
                        </li>
                    </ul>
                </form>
            </div>



        </>
    );
};

export default AddItem;