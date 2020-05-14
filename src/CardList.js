import React from 'react';
import Card from './Card';

const CardList = ({ robos }) => {
    return(
        <div>
            {
                robos.map((user)=>{
                    return <Card key = { user.id } props = {user}/>
                })
            }
        </div>
    );
}

export default CardList;