import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
    const { handleSubmit, errors } = useForm();
    const onSubmit = (data)=>{
        console.log(data)
    };
    return(
    /* "handleSubmit" will validate input before invoking "onSubmit" */
    <div className="form">
        <form onSubmit={handleSubmit(onSubmit)} className="namebox">
        <p>Welcome, what is your name?</p>
        <div className="form-box">
        <input className="textbox" type="name" placeholder="Your name" aria-invalid={errors.name ? "true" : "false"} />
            {errors.name && errors.name.type === 'Yourname is required'}
            {errors.name && errors.name.type === 'Max length exceeded'}
    {/* requiring assets directly from jsx if bundling code from the server-side*/}
        <input className='submitbox' type="image" src={require('../../assets/icon-mushroom.png')} alt='Submit'/>
        </div>
        </form>
    </div>
    );
}
export default Form