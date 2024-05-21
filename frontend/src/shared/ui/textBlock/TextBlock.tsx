import React from "react"
import classNames from "classnames"

import styles from './styles.module.css'

export type TTextBlockProps = {
    header: string
    text: string
    alignment: 'left' | 'right'
    className?: string
}

const TextBlock = ({header, text, alignment = 'left', className}: TTextBlockProps) => {
    return (
        <div className={classNames(className, styles.root, styles[alignment])}>
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
    )
};

export default TextBlock;
