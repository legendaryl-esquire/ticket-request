import React from 'react';
import Esquire from '../../Esq.png';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-gray-500/30 backdrop-blur-none">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <img src={Esquire} alt="Esquire Logo" className="h-10 w-auto" />

                <h1 className="text-lg font-semibold text-white">
                   
                </h1>
            </div>
        </header>
    );
};

export default Header;
