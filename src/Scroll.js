import React from 'react';

const Scrollable = (props) => {
    return (
        <div style={{ overflow:'scroll', border: '2px solid black', height: '800px'}}>
            { props.children }
        </div>
    );
}

export default Scrollable;