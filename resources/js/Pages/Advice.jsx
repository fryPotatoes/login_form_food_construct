import React, {useEffect, useLayoutEffect, useRef} from "react";
import { useLocation } from "react-router-dom";
import {getResultNorm} from "../formulas/getResultNorm";
import {calculationCalories} from "../formulas/calculationCalories";
import {getBodyMassIndex} from "../formulas/getBodyMassIndex";
import {getResultNormNew} from "../formulas/temporarily/getResultNormNew";
import Layout from '@/Layouts/Layout'
export default function Advice({profile, footer,header,children}) {

    // let norm = getResultNormNew(gender, weight, height, age, quotient, target);
    // let normsCalories = calculationCalories(target, norm);
      let bodyMassIndexDescription = getBodyMassIndex(profile.mass_index);


    console.log(profile);
    return (
        <Layout>
    <div className="result box">
        <h1 className="advice__heading">
            Рекомендации
        </h1>
        <div className="advice">
            <h3>Норма калорий</h3>
            <p className="advice__text">
                Ваша суточная норма килокалорий
            </p>
            <h4>{profile.caloric_norm}</h4>
        </div>
        <div className="advice">
            <h3>Белки</h3>
            <p className="advice__text">
                Рекомендуемое количество белка в граммах
            </p>
            <p className="advice__result">
                <span>от {profile.proteins_min}</span>
                <span>до {profile.proteins_max}</span>
            </p>
        </div>
        <div className="advice">
            <h3>Жиры</h3>
            <p className="advice__text">
                Рекомендуемое количество жиров в граммах
            </p>
            <p>
                <span>от {profile.fats_min}</span>
                <span>до {profile.fats_max}</span>
            </p>
        </div>
        <div className="advice">
            <h3>Углеводы</h3>
            <p className="advice__text">
                Рекомендуемое количество углеводов в граммах
            </p>
            <p>
                <span>от {profile.carbohydrates_min}</span>
                <span>до {profile.carbohydrates_max}</span>
            </p>
        </div>
        <div className="advice">
            <h3>Индекс массы тела</h3>
            <p className="advice__text">ИМТ – величина, позволяющая оценить
                степень соответствия массы человека и его роста
                и тем самым косвенно оценить, является ли масса недостаточной,
                нормальной или избыточной.
                Данный параметр не подходит для оценки спортсменов ввиду
                развитой мускулатуры
                и как следствие высокого ИМТ.
            </p>
            <p>
                <span>{profile.mass_index} - {bodyMassIndexDescription}</span>
            </p>
        </div>
        {header && (
            <header className="bg-grey-100 shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
            </header>
        )}
        <main>{children}</main>
        <footer>{footer}</footer>


    </div>
        </Layout>
    );
}


