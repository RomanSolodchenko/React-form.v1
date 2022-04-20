import React, {useState} from 'react';
import Signupform from './SignupForm';
import SignupFormSuccess from './SignupFormSuccess';

const Form = () => {

    const [formIsSubmited, setFormIsSubmited] = useState(false);

    const submitForm = () => {
        setFormIsSubmited(true);
    };
       

    return (
        <div>
            {!formIsSubmited ? (<Signupform submitForm={submitForm} />) : (<SignupFormSuccess />)}
        </div>
    );
};

export default Form;
