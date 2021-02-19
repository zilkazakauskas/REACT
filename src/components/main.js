import React from 'react';
import Jumbotron from './jumbotron';
import ItemCard from './itemCard';
import prekes from '../data/goods.json';

function Main() {
    return (
        <main role="main">
            <Jumbotron />
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">

                        {prekes.map((preke) => {
                            return <ItemCard preke={preke} />
                        })}

                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;