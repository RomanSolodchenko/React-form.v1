import React, {useState, useEffect} from 'react';
import validation from './validation';

const Signupform = ({submitForm}) => {


  const [values, setValues] = useState({           // отслеживание введеных значений и установка начальных
    fullname: "",
    email: "",
    password: "",
    });

// console.log(values);

    const handleFormSubmit = (event) => {
        event.preventDefault();                 // данная функция предотвращает перезагрузку страницы принажатии на кнопку сиг-ап, для отправки формы
        setErrors(validation(values));            // проверка введенных данных 
        setDataIsCorrect(true);   
                                       // при нажатие на кнопку сиг-ап состояние переходит в тру
    } 

  

const handleChange = (event) => {
setValues({
    ...values,
    [event.target.name]: event.target.value,
});
};                                                           // введеные данные пользователем и присвоение этих знчений


const [errors, setErrors] = useState({});

const [dataIsCorrect, setDataIsCorrect] = useState(false);      //состояние изначальное 


useEffect(() => {
if (Object.keys(errors).length === 0 && dataIsCorrect){
    submitForm(true);
  }
}, [errors]);


console.log(errors);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Registration</h2>
        </div>
            <form action="" className="form-wrapper">

                <div className="name">
                    <label htmlFor="" className="label">Name</label>
                    <input type="text" 
                    className="input" 
                    name="fullname" 
                    value={values.fullname} 
                    onChange = {handleChange} // отслеживать значение
                    />
                    {errors.fullname && <p className="error">{errors.fullname}</p>}
                </div>

                <div className="email">
                    <label htmlFor="" className="label">Email</label>
                    <input type="email"
                     className="input"
                      name="email"
                       value={values.email}
                       onChange = {handleChange}
                       />
                       {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="password">
                    <label htmlFor="" className="label">Password</label>
                    <input type="password"
                     className="input"
                      name = "password"
                       value={values.password}
                       onChange = {handleChange}
                       />
                       {errors.password && <p className="error">{errors.password}</p>} 
                </div>
<div>
    <button className="submit" onClick={handleFormSubmit}>sign up</button>
</div>
</form>
      </div>
    </div>
  );
};

export default Signupform;
