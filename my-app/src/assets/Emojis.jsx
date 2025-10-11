import React from 'react';
import {Button} from 'react-bootstrap';

const Emojis = ({name,emoji, counterValue, onClick}) => {

    const clickHandler = () => {
        onClick(name);
    }

    return (

                <Button
                    size='sm'
                    variant='dark'
                    onClick={clickHandler}
                >

                    <span className='emoji'>Counter for{emoji}</span>
                    <span>{counterValue}</span>
                </Button>
    );
};

export default Emojis;