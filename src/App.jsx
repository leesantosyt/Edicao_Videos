import React from 'react';
import { useRef, useLayoutEffect } from 'react';
import './App.css';

//import components
import Header from './components/Header';
import Footer from './components/Footer';

//import imagens
import logo from './img/logo_move.png';
import img_principal from './img/img_principal.jpg';
import img_edition from './img/editionUp.jpeg';

//import icones
import icon_menu from './icons/menu.png';
import icon_instagram from './img/logo_instagram.png'
import icon_youtube from './img/logo_youtube.png';
import timeline_youtube from "./img/timeline-youtube.png";
import timeline_instagram from "./img/timeline-instagram.png"
import timeline_twitter from "./img/timeline-twitter.png";
import timeline_snapchat from "./img/timeline-snap.jpg";
var varteste = false;

const Home = () => {
    const testando = [timeline_youtube, timeline_instagram, timeline_twitter, timeline_snapchat];
    const containerRef = useRef(), containerRef2 = useRef(), containerRef3 = useRef(), containerRef4 = useRef(), containerRef5 = useRef(), timeline = useRef();
    function hoverOptions(varTesteValue, nameClass, nameRef) {
        for (let num = 0; num < document.getElementsByClassName('bts-list').length; num++) {
            document.getElementsByClassName('bts-list')[num].onmouseenter = () => {
                timeline.current.style.background = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,1)), url(${testando[num]}) center`;
            }
            document.getElementsByClassName('bts-list')[num].onmouseout = () => {
                timeline.current.style.background = 'linear-gradient(90deg,#130000 2%, #5c0000 50%, #130000 98%)';
            }
        }
        varteste = varTesteValue;
        eval(nameRef).current.className = nameClass;
    }

    return (
    <div>
        <Header/>
        <main id='principal'>
            <div id='inicio'>
                <h1 id='text_inicio'>Uma visão diferente para a criação de vídeos</h1>
                <div id='div-imgs-inicio'>
                    <img className='logo oi' src={logo} alt="imagem principal"/>
                    <img id='img_principal' className='logo' src={img_principal} alt="imagem principal"/>
                </div>
            </div>
        </main>
        <section id='timeline' ref={timeline}>
            <div id='linha'></div>
            <ol id='menu-interaction'>
                <li className='teste'>
                    <a href=""><button className='bts-list' onMouseEnter={() => hoverOptions(true, 'visible', 'containerRef')} onMouseOut={() => hoverOptions(false, 'hidden', 'containerRef')}>Youtube</button></a>
                    <div ref={containerRef} className='hidden itens'>
                        <img className='icon-timeline' src={timeline_youtube}/>
                    </div>
                </li>
                <li className='teste'>
                    <a href=""><button className='bts-list' onMouseEnter={() => hoverOptions(true, 'visible', 'containerRef2')} onMouseOut={() => hoverOptions(false, 'hidden', 'containerRef2')}>Instagram</button></a>
                    <div ref={containerRef2} className='hidden itens'>
                        <img className='icon-timeline' src={timeline_instagram}/>
                    </div>
                </li>
                <li className='teste'>
                    <a href=""><button className='bts-list' onMouseEnter={() => hoverOptions(true, 'visible', 'containerRef3')} onMouseOut={() => hoverOptions(false, 'hidden', 'containerRef3')}>Twitter</button></a>
                    <div ref={containerRef3} className='hidden itens'>
                        <img className='icon-timeline' src={timeline_twitter}/>
                    </div>
                </li>
                <li className='teste'>
                    <a href=""><button className='bts-list' onMouseEnter={() => hoverOptions(true, 'visible', 'containerRef4')} onMouseOut={() => hoverOptions(false, 'hidden', 'containerRef4')}>Snapchat</button></a>
                    <div ref={containerRef4} className='hidden itens'>
                        <img className='icon-timeline' src={timeline_snapchat} />
                    </div>
                </li>
            </ol>
        </section>
        <section id='edition'>
            <p id='text_edition'>Nos cinco anos anteriores, o consumo desse tipo de conteúdo na internet cresceu nada menos do que 165%, em um cenário no qual a televisão ganhou meros 24% de aumento. Das cerca de duas mil pessoas ouvidas para a produção do estudo, quase todas (95%) veem vídeos online.</p>
            <div>
                <img id='img-edition' src={img_edition}></img>
            </div>
        </section>
        <div id='redes-sociais'>
            <div ref={containerRef5} className='hidden-redes'>
                <img className='icons' src={icon_instagram}></img>
                <img className='icons' src={icon_youtube}></img>
            </div>
            <img id='redes-sociais-menu'src={icon_menu}  onMouseEnter={() => hoverOptions(true, 'visible-redes', 'containerRef5')} onMouseOut={() => hoverOptions(false, 'hidden-redes', 'containerRef5')}></img>
        </div>
        <Footer/>
    </div>
)};

export default Home;
