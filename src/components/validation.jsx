//функция принимает валюес значения введенное пользователем
// и проверит есть ли какая либо ошибка
const validation = (values) => {

    let errors = {};

    if(!values.fullname){
        errors.fullname = "name is required"
    } //если введеное поле пустое выдаст ошибку

    if(!values.email){
        errors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "email is invalid"
    }// пустое поле ошибка, если почта не совпадает ошибка

    if(!values.password){
        errors.password = "password is required"
    }else if ( values.password.length < 4){
        errors.password = "password min length 4"
    } // проверка на колво символов

    return errors;
}

export default validation;
