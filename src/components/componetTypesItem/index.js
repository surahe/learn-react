import React, { useCallback } from 'react';
import {componentTypes} from '../../utils/react-extends';

const RedItem = ({
    name,
    handleClick = () => {},
}) => {
    return <p style={{color: 'red'}} onClick={handleClick}>{name}</p>
}

const BlackItem = ({
    name,
    handleClick = () => {},
}) => {
    return <p style={{color: 'black'}} onClick={handleClick}>{name}</p>
}

const GreenItem = ({
    name,
    handleClick = () => {},
}) => {
    return <p style={{color: 'green'}} onClick={handleClick}>{name}</p>
}

export default componentTypes({
    'red': RedItem,
    'black': BlackItem,
    'green': GreenItem,
}, {
    keyName: 'colorStyle',
    hooks: [({
        id,
        showBtn,
        displayStatus,
    }) => {
        const handleClick = useCallback(() => {
            if (displayStatus) {
                alert(`id： ${id}, \n\n showBtn： ${showBtn}, `);
            }
        }, [id, displayStatus, showBtn]);

        return {
            handleClick,
        }
    }]
})