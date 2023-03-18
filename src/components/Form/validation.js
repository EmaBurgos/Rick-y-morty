const validation = (userData, errors, setErrors) => {
    if(!userData.username)
    setErrors({ ...errors, username: "Por favor completa este campo"});
    else if (userData.username.length > 35)
    setErrors ({...errors, username : "No puede superar los 35 caracteres"});
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)){
        setErrors({ ...errors, username: "Email inválido"});
    } else {
        setErrors({ ...errors, username:""})
    }
    if(userData.password.length < 6 || userData.password.length > 10) {
        setErrors({ ...errors, password: "Longitud de password inválida"});
    } else if (!/\d/.test(userData.password)) {
        setErrors({ ...errors, password: "Debe contener al menos un número"});
    } else {
        setErrors({ ...errors, password: ""})
    }
        
    
};

export default validation;