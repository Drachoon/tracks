import React from 'react';
import classes from './Career.module.css';
import WorkPlace from './WorkPlace/WorkPlace';
import YearCutoff from './YearCutoff/YearCutoff';

const Career = () => {
    return (
        <section className={classes.сareer}>
            <h2>Карьера</h2>
            <WorkPlace firm="Фрилансер" position="web-программист" description="Full-stack, Diafan, 1С-Битрикс" />
            <YearCutoff year="2019" />
            <WorkPlace firm="Олатойз" position="Оператор лазерного станка ЧПУ" />
            <WorkPlace firm="КБ 'Фрагма'" position="Cборщик штанг, Пайщик печатных плат, Сборщик рамок" />
        </section>
    );
}

export default Career;

