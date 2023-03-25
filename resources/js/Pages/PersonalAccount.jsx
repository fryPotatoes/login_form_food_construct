
import React, { useState } from 'react';
import "../../css/account.css";
import MenuAccount from "../components/MenuAccount";
import {Link} from "react-router-dom";
import Layout from "@/Pages/Layout";
import {usePage} from "@inertiajs/react";

export default function PersonalAccount({user,auth}) {


    user.map(users => {
            return <h1><div className="reccard_main_title">{users.id}
                <div className="reccard_main_title">{users.age}</div>
            </div></h1>
          }
    )


    // const user = {
    //     "login": "user123",
    //     "name": "Иван",
    //     "gender": "мужской",
    //     "age": "30",
    //     "email": "1234@mail.ru",
    //     "phone": "8-999-000-00-00",
    //     "weight": "110",
    //     "height": "180",
    //     "quotient": "1,2 (низкий) - малоподвижный образ жизни," +
    //         "отсутствие занятий спортом,\n" +
    //         "меньше 10 тыс. шагов в день",
    //     "target": "похудение",
    // }

    return (
        <Layout>
        <div className="account">

            {user.map(users => {
                return <div className="reccard_main_title"> <main className="account__box">

                <section className="account__profile">




                    <h2>Персональные данные</h2>
                    <div className="account__inner">
                        <p>Логин</p>
                        <span>{ auth.user.id}</span>
                    </div>
                    <div className="account__inner">
                        <p>Имя</p>
                        <span>{ auth.user.name }</span>
                    </div>
                    <div className="account__inner">
                        <p>Пол</p>
                        <span>{ users.gender }</span>
                    </div>
                    <div className="account__inner">
                        <p>Возраст</p>
                        <span>{ users.age }</span>
                    </div>
                    <div className="account__inner">
                        <p>Телефон</p>
                        <span>{ users.phone }</span>
                    </div>
                    <div className="account__inner">
                        <p>Email</p>
                        <span>{ auth.user.email }</span>
                    </div>
                    <button type="submit" className="account__btn">
                        Изменить
                    </button>
                </section>
                <section className="account__profile">
                    <h2>Мои параметры</h2>
                    <div className="account__inner">
                        <p>Вес (в кг)</p>
                        <span>{ users.weight }</span>
                    </div>
                    <div className="account__inner">
                        <p>Рост (в см)</p>
                        <span>{ users.height }</span>
                    </div>
                    <div className="account__inner">
                        <p>Коэфициент активности</p>
                        <span>{ users.quotient }</span>
                    </div>
                    <div className="account__inner">
                        <p>Цель</p>
                        <span>{ users.target }</span>
                    </div>
                    <button type="submit" className="account__btn">
                        Изменить
                    </button>
                </section>
            </main></div>
            })}
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
