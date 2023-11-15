import Login from './Login';
import Register from './Register';
import { useState } from 'react';
import styles from './styles/index.css'

import star from '../../assets/icons/eiffel.png';
import Apple from '../../assets/icons/Apple.png';
import Google from '../../assets/icons/Google.png';
import Facebook from '../../assets/icons/Facebook.png';
import Steam from '../../assets/icons/Steam.png';

function Authentication(props) {
    let [registered, setRegistered] = useState(true);

    let registerBB = { "boxShadow": "inset calc(((577px / 100) * 70) / 2) 0 #FAC704" }
    let loginBB = { "boxShadow": "inset calc(((-577px / 100) * 70) / 2) 0 #FAC704" }

    return (
        <section id='authentication-section' style={styles}>
            <div>
                <img src={star} className='main-logo' alt="Star" width={100} height={100} />

                <div className='action-btns'>
                    <button onClick={() => { setRegistered(true) }}>ВОЙТИ</button>
                    <button onClick={() => { setRegistered(false) }}>СОЗДАТЬ АККАУНТ</button>
                    <span className='border-bottom' style={registered ? registerBB : loginBB}></span>
                </div>

                <div className={registered ? 'visible' : 'invisible'}>
                    <Login />
                </div>
                <div className={registered ? 'invisible' : 'visible'}>
                    <Register />
                </div>

                <div className='globals'>
                    <div>
                        <p></p>
                        <p>Или войдите через</p>
                        <p></p>
                    </div>
                    <div>
                        <span className='steam'>
                            <img src={Steam} alt="Steam" />
                        </span>
                        <span className='apple'>
                            <img src={Apple} alt="Apple" />
                        </span>
                        <span className='google'>
                            <img src={Google} alt="Google" />
                        </span>
                        <span className='facebook'>
                            <img src={Facebook} alt="Facebook" />
                        </span>
                    </div>
                </div>

                <div className='footer'>
                    Создавая аккаунт в "Alisher Company", вы соглашаетесь с нашими 
                    <a href='#'>Условиями использования</a> и <a href='#'>Политикой конфиденциальности</a>
                </div>
            </div>
        </section>
    );
}

export default Authentication;