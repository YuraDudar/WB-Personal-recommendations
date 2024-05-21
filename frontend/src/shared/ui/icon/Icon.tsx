import React from "react"
import icon from '../../../assets/icons'
import classNames from 'classnames'

import styles from './styles.module.css'

export type TIcon = keyof typeof icon
export type TIconSize = 'xs' | 's' | 'm' | 'l'
type TIconProps = {
    size?: TIconSize
    name: TIcon
}

const Icon = ({name, size = 'm'}: TIconProps) => {
    const IconElem = icon[name]

    return (
        <IconElem width={0} height={0} className={classNames(styles.root, styles[size])} />
    )
};

export default Icon;
