import './index.css'
import image from './images/decstop.png'
import {SyntheticEvent, useState} from "react";

function App() {
    const [isShowLogin, setLogin] = useState(false)
    const onSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
            check: formData.get('check'),
            email: formData.get('email'),
            password: formData.get('pass')
        };

        console.log(data)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const action = e.nativeEvent.submitter?.name;
        if (action === 'signIn') {
            // Обработка данных для входа
            //если запрос успешен, то
            e.currentTarget.reset()
        } else if (action === 'signUp') {
            // Обработка данных для регистрации
            //если запрос успешен, то
            e.currentTarget.reset()
        }
    }

    const closeHandler = () => {
        setLogin(false)
    }

    const showLoginHandler = () => {
        setLogin(true)
    }

    return (
        <div className={'wrapper'}>
            {
                isShowLogin ?
                    <section className={'login'}>
                        <main className={'login_main'}>
                            <div className={'close_popup'}>
                                <button onClick={closeHandler} className={'close_button'}></button>
                            </div>
                            <form onSubmit={onSubmit} className={'form'}>
                                <p>Войти в систему</p>
                                <input name={'email'} placeholder={'Email/Телефон'}/>
                                <input name={'pass'} placeholder={'Пароль'}/>
                                <label> <input name={'check'} type={"checkbox"}/> Запомнить пароль</label>
                                <a href={'#'} onClick={() => {
                                }} className={'link'}>Восстановить</a>
                                <button value={'ff'} name={'signIn'} className={'signIn'} type={'submit'}>Войти</button>
                                <button value={'dd'} name={'signUp'} className={'signUp'}>Зарегистрироваться</button>
                            </form>
                        </main>
                    </section>
                    :
                    <main className={'main'}>
                        <aside className={'aside'}>
                            <h2>Демо-версия</h2>
                            <p>За 18 лет деятельности было реализовано более 500 крупных, а так же, не менее 2500
                                средних и
                                малых проектов. Используя знания и накопленный опыт мы можем предложить </p>
                            <button onClick={showLoginHandler}>Попробовать бесплатно</button>
                        </aside>
                        <section className={'section'}>
                            <img src={image} alt="ff"/>
                        </section>
                    </main>
            }
        </div>
    )
}

export default App
