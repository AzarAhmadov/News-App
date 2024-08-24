import React, { memo } from 'react';
import classNames from 'classnames';
import './button.css'

const Button: React.FC<any> = ({ children, type, rounded, size }) => {

    console.log(`btn-${type}`)

    return (
        <button className={classNames(
            {
                'btn': true,
                'btn-rounded': rounded,
            },
            [`btn-${type}`, `btn-${size}`]
        )}>
            {children}
        </button>
    );
}

export default memo(Button);
