import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css"


const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const[errors, setErrors] = useState ({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({ ...userData, [property]: value});
        validation ({ ...userData, [property]: value}, errors, setErrors)

    };

    const submitHandler = (event) => {
        event.preventDefault()
        login(userData);
    }


    return (
        <form onSubmit={submitHandler} className={style.container}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>
                <p>{errors.username}</p>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" value={userData.password} onChange={handleInputChange}/>
            </div>
            <button className={style.login}>LOGIN</button>
        </form>
    );
};

export default Form;