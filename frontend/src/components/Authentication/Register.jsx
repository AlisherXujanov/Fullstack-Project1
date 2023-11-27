import Eye from "../../assets/icons/Eye.png";
import { useState } from "react";
function Register(props) {
    let [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <form className="auth-form">
                <div>
                    <input type="text" id="register-name-input" placeholder="Введите никнейм" />
                    <input type="text" id="register-email-input" placeholder="Электронная почта" pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$' />
                </div>
                <div>
                    <input type={showPassword ? "text" : "password"} id="register-pass-input" className="pass-input" placeholder="Придумайте пароль" pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' />
                    <img src={Eye} onClick={() => { setShowPassword(!showPassword) }} alt="" />
                </div>
                <div>
                    <input type="password" id="pass2-input" placeholder="Повторите пароль" pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' />
                </div>
                <button className='войти'>Создать</button>
            </form>
        </div>
    );
}

export default Register;