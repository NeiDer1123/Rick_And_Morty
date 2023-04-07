const validateEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// const validatePassword = /^[A-Za-z0-9\s]+$/g

export default function validation(inputs){
    let errors = {}

    if(!inputs.username){
        errors.username = "Debes escribir un correo electrónico"
    }
    if(inputs.username.length > 35){
        errors.username = "Debe tener menos de 35 caracteres"
    }
    if(!validateEmail.test(inputs.username)){
        errors.username = "Debe ser un correo electrónico"
    }
    if(!inputs.password.match(/\d/)){
        errors.password = "Debe contener al menos un numero"
    }
    if(inputs.password.length < 6 || inputs.password.length > 10){
        errors.password = "Debe tener entre 6 y 10 caracteres"
    }

    return errors
}