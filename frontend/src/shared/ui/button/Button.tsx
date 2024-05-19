import React, { MouseEventHandler } from "react"
import classNames from "classnames"

import styles from './styles.module.css'

export type TButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>
    variant?: 'intro'
    children?: any
    className?: string
}

const Button = ({variant = 'intro', onClick, children, className}: TButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={classNames(className, styles.root, styles[variant])}
        >
           {children}
        </button>
    )
};

export default Button;
