import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Menu extends Component {

    componentDidMount() {
        const app = (() => {
            let body;
            let menu;
            let menuItems;
            let menuContainer;

            const init = () => {
                body = document.querySelector('body');
                menu = document.querySelector('.menu-icon');
                menuItems = document.querySelectorAll('.nav__list-item');
                menuContainer = document.querySelector('.nav__content');

                applyListeners();
            }

            const applyListeners = () => {

                menu.addEventListener('click', () => toggleClass(body, 'nav-active'))
                menu.addEventListener('click', () => toggleClass(menuContainer, 'nav__content-hidden'));
                menuItems[0].addEventListener('click', () => toggleClass(body, 'nav-active'));
                menuItems[1].addEventListener('click', () => toggleClass(body, 'nav-active'));
                menuItems[2].addEventListener('click', () => toggleClass(body, 'nav-active'));
                menuItems[0].addEventListener('click', () => toggleClass(menuContainer, 'nav__content-hidden'));
                menuItems[1].addEventListener('click', () => toggleClass(menuContainer, 'nav__content-hidden'));
                menuItems[2].addEventListener('click', () => toggleClass(menuContainer, 'nav__content-hidden'));
                document.addEventListener('keyup', function (evt) {

                    if (evt.key === "Escape") {
                        body.classList.remove('nav-active');
                        menuContainer.classList.add('nav__content-hidden');
                    }

                })

            }

            const toggleClass = (element, stringClass) => {
                if (element.classList.contains(stringClass))
                    element.classList.remove(stringClass);
                else
                    element.classList.add(stringClass);
            }

            init();
        });

        app();
    }


    render() {
        return (
            <>
                <div className="menu-icon">
                    <span className="menu-icon__line menu-icon__line-left"></span>
                    <span className="menu-icon__line"></span>
                    <span className="menu-icon__line menu-icon__line-right"></span>
                </div>

                <div className="nav">
                    <div className="nav__content nav__content-hidden">
                        <ul className="nav__list">
                            <Link to="/home">
                                <li className="nav__list-item">Home</li>
                            </Link>

                            <Link to="/about">
                                <li className="nav__list-item">About</li>
                            </Link>

                            <Link to='/news'>
                                <li className="nav__list-item">News</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </>

        )
    }
}

export default Menu;