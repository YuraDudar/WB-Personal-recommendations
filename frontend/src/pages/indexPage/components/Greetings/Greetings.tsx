import React from "react"

import styles from './styles.module.css';
import Icon from "../../../../shared/ui/icon/Icon";
import Button from "../../../../shared/ui/button/Button";
import { useNavigate } from "react-router-dom";

const Greetings = () => {
    const navigate = useNavigate();
    const redirectToAdmin = () => navigate('/')

    return (
        <div className={styles.root}>
            <div className={styles.main}>
                <div className={styles.iconRow}>
                    <Icon name='mai' size='l' />
                    <Icon name='wb' size='l' />
                </div>
                <div>
                    <p className={styles.text}>WB Recommendation System<br />&<br />Admin Panel</p>
                </div>
                <Button className={styles.button} onClick={redirectToAdmin}>
                    <p>перейти</p>
                </Button>
            </div>
        </div>
    )
};

export default Greetings;
