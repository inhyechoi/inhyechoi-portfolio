import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
    const { handleSubmit, errors, register } = useForm({
        defaultValues:{
            firstName: ""
        }
    });

    const onSubmit = data =>{
        console.log(data);
    };
    
    return(
        /* "handleSubmit" will validate input before invoking "onSubmit" */
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)} className="namebox">
            <p>Welcome, what is your name?</p>
            <div className="form-box">
                <input className="textbox" type="text" name="firstName" placeholder="Your name" ref={register({ required: true })}/>
                    {errors.firstName && errors.firstName.type === "required" && (
                        <div className="error-name">Username is incorrect.<br />Try again!</div>
                    )}
            {/* requiring assets directly from jsx if bundling code from the server-side*/}
                {/* <input className='submitbox' type="image" name="name" src={require('../../assets/icon-mushroom.png')} alt='Submit' ref={register} onSubmit={ e => {e.preventDefault();}}/>
                    {errors.firstName && errors.firstName.type === "required" && (
                        <div className="error">You must enter your name.</div>
                    )} */}
            </div>
            </form>
        </div>
    );
}
export default Form