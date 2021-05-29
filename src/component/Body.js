
function Body() {
    return (
        <section>
            <div>
                <img className="avatar" />
                <h1>Денис aka Drachoon Баженов</h1>
                <p>39 лет</p>
                <p>Йошкар-Ола</p>
            </div>
            <div>
                <h2>Контакты</h2>
                <p>Телефон: +7 927 874 19 32 Watsup, Viber, Telegram</p>
                <p>Эл.почта: den-racoon@yandex.ru</p>
                <p>Skype: denis.bazhenov</p>
                <p>VK: https://vk.com/drachoon</p>
            </div>
            <div>
                <h2>Карьера</h2>
                <div className="workPlace">
                    <h3>Фрилансер</h3>
                </div>
                <div className="time">2019</div>
                <div>
                    <h3>Олатойз</h3>
                    <p>Оператор лазерного станка ЧПУ</p>
                </div>
                <div>
                    <h3>КБ Фрагма</h3>
                    <p>Рабочий участка сборки штанг</p>
                    <p>Монтаж печатных плат</p>
                </div>
            </div>
        </section>
    );
}

export default Body;