import './Info.css';

function Info() {
    return (
        <section className="info">
            <img className="avatar" src="https://sun7-8.userapi.com/s/v1/ig2/7LA4xUsZpIK1Er3dgWxVKKgXq49NPwZljiy_GUzxa8HrBHEK_bU3HezSUrp_Ruvn8ANH88exdY9Yx53G1RZXXAwE.jpg?size=200x0&quality=96&crop=45,0,1272,1291&ava=1" width="200" height="202" alt="Денис aka Drachoon Баженов"/>
            <div className="personal">
                <h1>Денис aka Drachoon Баженов</h1>
                <p>39 лет</p>
                <p>Йошкар-Ола</p>
            </div>
            <div className="contacts">
                <h2>Контакты</h2>
                <p><span>Телефон:</span> +7 927 874 19 32 WhatsApp, Viber, Telegram</p>
                <p><span>Эл.почта:</span> den-racoon@yandex.ru</p>
                <p><span>Skype:</span> denis.bazhenov</p>
                <p><span>VK:</span> https://vk.com/drachoon</p>
            </div>
        </section>
    );
}

export default Info;