import React from 'react';
import Card from './Card';

const CardList = ({ robos }) => {
    return(
        <div>
            {
                robos.map((user)=>{
                    return <Card props = {user}/>
                })
            }
        </div>
    );
}

export default CardList;