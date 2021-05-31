import './Career.css';

function Career() {
    return (
        <section className="сareer">
            <h2>Карьера</h2>
            <div className="workPlace">
                <h3>Фрилансер</h3>
            </div>
            <div className="time">2019</div>
            <div className="workPlace">
                <h3>Олатойз</h3>
                <p>Оператор лазерного станка ЧПУ</p>
            </div>
            <div className="workPlace">
                <h3>КБ "Фрагма"</h3>
                <p>Рабочий участка сборки штанг</p>
                <p>Монтаж печатных плат</p>
            </div>
        </section>
    );
}

export default Career;

