import React from 'react';

const Header = () => {
    return(
        <div>
            <header id='cabecalho'>
                <nav>
                    <ol id='nav-list'>
                        <li><a className='nav_item' href="./contato">Home</a></li>
                        <li><a className='nav_item' href="">Planos</a></li>
                        <li><a className='nav_item' href="">Sobre</a></li>
                        <li><a className='nav_item' href="./vídeos">Vídeos</a></li>
                    </ol>
                </nav>
            </header>
        </div>
)};

export default Header;