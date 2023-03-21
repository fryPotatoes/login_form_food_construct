import React from 'react';
import { Link } from '@inertiajs/react';
// import '../../css/recipe.css';

import vk from "../../../public/assets/recipe_image/icons/icons-vk.png";
import yt from "../../../public/assets/recipe_image/icons/icons-youtube.png";
import tg from "../../../public/assets/recipe_image/icons/icons-telegram.png";



export default function FooterList(props)  {
    return (




        <div{...props}>
            <div className="section section_footer">
                <div className="container">
                    <div className="footer">
                        <ul className="footer_menu">

                            <li className="footer_menu_item"><Link className="footer_menu_color" href="/">Главная</Link></li>
                            <li className="footer_menu_item"><Link className="footer_menu_color" href="/posts">Конструктор меню</Link></li>
                            <li className="footer_menu_item"><Link className="footer_menu_color" href="/recipes">Рецепты</Link></li>
                        </ul>

                        <div className="footer_contacts">
                            <div className="footer_contacts_item"><a href="#" target="_blank"><img className="footer_menu_icons" src={vk}></img></a>&nbsp;<a href="#" target="_blank"><img className="footer_menu_icons" src={yt}></img></a>&nbsp;<a href="#" target="_blank"><img className="footer_menu_icons" src={tg}></img></a>&nbsp;</div>
                            <div className="footer_contacts_item"><a className="footer_menu_color" href="#" target="_blank">admin@avocado.pro</a></div>
                            <div className="footer_contacts_item"><a className="footer_menu_color" href="#">Политика конфиденциальности</a></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
};


