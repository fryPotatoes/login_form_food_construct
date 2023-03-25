
import React, {useEffect, useLayoutEffect, useRef} from "react";
import {getBodyMassIndex} from "@/formulas/getBodyMassIndex";
import "../../css/account.css";
import Layout from "@/Pages/Layout";
export default function Advice({profile}) {

    // let norm = getResultNormNew(gender, weight, height, age, quotient, target);
    // let normsCalories = calculationCalories(target, norm);
    let bodyMassIndexDescription = getBodyMassIndex(profile.mass_index);


    console.log(profile);
    return (
        <Layout>
        <div className="account">
            <main className="account__box advice__wrap">
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
                    <p className="advice__result"> от &nbsp;
                        <span>{profile.proteins_min}</span> &nbsp; до &nbsp;
                        <span>{profile.proteins_max}</span>
                    </p>
                </div>
                <div className="advice">
                    <h3>Жиры</h3>
                    <p className="advice__text">
                        Рекомендуемое количество жиров в граммах
                    </p>
                    <p className="advice__result"> от &nbsp;
                        <span>{profile.fats_min}</span> &nbsp; до &nbsp;
                        <span>{profile.fats_max}</span>
                    </p>
                </div>
                <div className="advice">
                    <h3>Углеводы</h3>
                    <p className="advice__text">
                        Рекомендуемое количество углеводов в граммах
                    </p>
                    <p className="advice__result"> от &nbsp;
                        <span>{profile.carbohydrates_min}</span> &nbsp; до &nbsp;
                        <span>{profile.carbohydrates_max}</span>
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
                    <p className="advice__result">
                        <span>{profile.mass_index}</span> &nbsp;
                        - {bodyMassIndexDescription}
                    </p>
                </div>
            </main>
            <div className="account__menu">

                <nuv>
                    <ul>
                        <li>
                            <a href="/account">Мой профиль</a>
                        </li>
                        <li>
                            <a href="/advice">Мои рекомендации</a>
                        </li>
                        <li>
                            <a href="#">Меню на неделю</a>
                        </li>
                    </ul>
                </nuv>
            </div>
        </div>
        </Layout>
    );
}
