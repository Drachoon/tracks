import classes from './Career.module.css';

function Career() {
    return (
        <section className={classes.сareer}>
            <h2>Карьера</h2>
            <div className={classes.workPlace}>
                <h3>Фрилансер</h3>
            </div>
            <div className={classes.time}>2019</div>
            <div className={classes.workPlace}>
                <h3>Олатойз</h3>
                <p>Оператор лазерного станка ЧПУ</p>
            </div>
            <div className={classes.workPlace}>
                <h3>КБ "Фрагма"</h3>
                <p>Рабочий участка сборки штанг</p>
                <p>Монтаж печатных плат</p>
            </div>
        </section>
    );
}

export default Career;

