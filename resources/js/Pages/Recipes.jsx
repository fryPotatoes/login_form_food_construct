import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import Layout from '@/Layouts/Layout';
import React, {useEffect, useState} from 'react';
import '../../css/App.scss';
import img1 from "../../../public/assets/recipe_image/images/62c30bce0f146.jpg";
import usePagination from "../hooks/usePagintaion";
import { Link, animateScroll as scroll } from "react-scroll";
import {Head} from "@inertiajs/react";
import FooterList from "@/Components/FooterList";





    export default function Recipes({recipes,auth, header, children, footer}) {
console.log(auth)

            const [category, setCategory] = useState(recipes);
            const [categoryId, setCategoryId] = useState(category);
            const {firstContentIndex, lastContentIndex, nextPage, prevPage, page, setPage, totalPages} = usePagination({
            contentPerPage: 12,
            count: categoryId.length,
        });

            useEffect(() =>{
            if (category !== recipes){
            setCategory(recipes);
        }
        },[category]);

            const scrollToTop = () => {
            scroll.scrollToTop();
        }

            const handleClickCategory = (event) => {
            if (event.target.id === "Завтрак") {
            setCategoryId(() => category.filter(recipe => recipe.category_title === "завтрак"));
        } else if (event.target.id === "Обед") {
            setCategoryId(() => category.filter(recipe => recipe.category_title === "обед"))
        } else if (event.target.id === "Перекус") {
            setCategoryId(() => category.filter(recipe => recipe.category_title === "перекус"))
        } else {
            setCategoryId(() => category.filter(recipe => recipe.category_title === "ужин"))
        }
        }

            const handleClickCalorie = (event) => {
            if (event.target.id === "100"){
            setCategoryId(() => category.filter(recipe => recipe.calorie <= 100));
        }else if(event.target.id === "400"){
            setCategoryId(() => category.filter(recipe => recipe.calorie >= 100).filter(recipe => recipe.calorie <= 400))
        }else if(event.target.id === "700"){
            setCategoryId(() => category.filter(recipe => recipe.calorie >= 400).filter(recipe => recipe.calorie <= 700))
        }else{
            setCategoryId(() => category.filter(recipe => recipe.calorie >= 700).filter(recipe => recipe.calorie <= 1000))
        }
            console.log(typeof event.target.id)
        }

            const handleClickCookingTime = (event) => {
            if (event.target.id === "5"){
            setCategoryId(() => category.filter(recipe => recipe.cooking_time < 6));
        }else if(event.target.id === "15"){
            setCategoryId(() => category.filter(recipe => recipe.cooking_time >= 5).filter(recipe => recipe.cooking_time <= 15))
        }else if(event.target.id === "30"){
            setCategoryId(() => category.filter(recipe => recipe.cooking_time >= 15).filter(recipe => recipe.cooking_time <= 30))
        }else{
            setCategoryId(() => category.filter(recipe => recipe.cooking_time >= 30).filter(recipe => recipe.cooking_time <= 60))
        }
        }

            const img = img1;

    return (

        <Layout

            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Страница Авторизованного пользователя:  {auth.user.name}!</h2>}
            footer={<h2 className="font-semibold text-xl text-gray-800 leading-tight">footer пользователя:  {auth.user.name}!</h2>}

        >
        <main>

                <div  className="scroll-py-11">
                    <div className="py-1">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm ">
                                <div className="p-6 text-gray-900">Рецепты для:  {auth.user.name}!</div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="recipeListMain">

                <div className=" recipes_main" >

                    <div className="recipeList" >
                        {categoryId.slice(firstContentIndex, lastContentIndex).map((item, index) => (
                            <div className="product-wrap">
                                <div className="product-item" key={item.title}>
                                    <div className="product-buttons">
                                        <a href={"/recipe/"+item.id} className="button">Перейти</a>
                                    </div>
                                    <img src={img} alt="atata" />
                                </div>
                                <div className="product-title">
                                    <a href={"/recipe/"+item.id}>{item.title}</a>
                                    <span className="product-price">{item.category_title}</span>
                                    <span className="product-price">Ккалории: {item.calorie}</span>
                                    <span className="product-price">{item.cooking_time} мин.</span>
                                </div>
                            </div>
                        ))}
                    </div>





                    <div>

                        <div className="pagination">
                            <p className="text">
                                {page}/{totalPages}
                            </p>
                            <button onClick={prevPage} className="page">
                                &larr;
                            </button>
                            {/* @ts-ignore */}
                            {[...Array(totalPages).keys()].map((el) => (
                                <Link className={`page ${page === el + 1 ? "active" : ""}`}
                                      style={{margin: "0 5px"}}
                                      spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration={500}
                                      onClick={scrollToTop()}
                                ><button
                                    className={`page ${page === el + 1 ? "active" : ""}`}
                                    onClick={ () => setPage(el + 1)}
                                    key={el}

                                > {el + 1}
                                </button>

                                </Link>
                            ))}
                            <button onClick={nextPage} className="page">
                                &rarr;
                            </button>
                        </div>
                    </div>

                    <nav className="navigation">
                <ul className="navigation-list"> <strong style={{fontSize: "20px", color: "#8c7d5e"}}> Рецепты по категориям </strong>
                     <li className="navigation-link">
                        <button className="button_category" onClick={handleClickCategory} type={'button'} id={"Завтрак"}>Завтрак</button></li>
                    <li className="navigation-link">
                        <button className="button_category" onClick={handleClickCategory} type={'button'} id={"Обед"}>Обед</button></li>
                    <li className="navigation-link">
                        <button className="button_category" onClick={handleClickCategory} type={'button'} id={"Перекус"}>Перекус</button></li>
                    <li className="navigation-link">
                        <button className="button_category" onClick={handleClickCategory} type={'button'} id={"Ужин"}>Ужин</button></li>
                </ul>
                <ul className="navigation-list"> <strong style={{fontSize: "20px", color: "#8c7d5e"}}> Рецепты блюд по калорийности </strong>
                    <li className="navigation-link">
                        <button className="button_category" onClick={handleClickCalorie} type={'button'} id={"100"}>До 100ккал</button></li>
                    <li className="navigation-link">
                        <button className="button_category" onClick={handleClickCalorie} type={'button'} id={"400"}>От 100 до 400ккал</button></li>
                    <li className="navigation-link">
                        <button className="button_category" onClick={handleClickCalorie} type={'button'} id={"700"}>От 400 до 700ккал</button></li>
                    <li className="navigation-link">
                        <button className="button_category" onClick={handleClickCalorie} type={'button'} id={"1000"}>От 700 до 1000ккал</button></li>
                </ul>
                <ul className="navigation-list"> <strong style={{fontSize: "20px", color: "#8c7d5e"}}> Рецепты по времени приготовления </strong>
                    <li className="navigation-link">
                        <button className="button_category" onClick={handleClickCookingTime} type={'button'} id={"5"}>До 5 минут</button></li>
                    <li className="navigation-link">
                        <button className="button_category" onClick={handleClickCookingTime} type={'button'} id={"15"}>От 5 до 15 минут</button></li>
                    <li className="navigation-link">
                        <button className="button_category" onClick={handleClickCookingTime} type={'button'} id={"30"}>От 15 до 30 минут</button></li>
                    <li className="navigation-link">
                        <button className="button_category" onClick={handleClickCookingTime} type={'button'} id={"60"}>От 30 до 60 минут</button></li>
                </ul>
            </nav>
                </div>
            </div>
        </main>

            <footer className="font-semibold text-xl text-gray-500 leading-tight" >
                <FooterList></FooterList>
            </footer>

        </Layout>

    );

}
