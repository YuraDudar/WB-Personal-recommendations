import React, { useRef } from "react"

import Greetings from "./components/Greetings"
import styles from './styles.module.css'
import ProjectDescription from "./components/ProjectDescription";
import Icon from "../../shared/ui/icon/Icon";

const IndexPage = () => {
    return (
        <div className={styles.root}>
            <Greetings />
            <div className={styles.aboutUs}>
                <p>About US</p>
                <Icon name='arrowDown' size='xs' />
            </div>
            <ProjectDescription />
            {/* мега лень делать футер если честно */}
            <img className={styles.footer} src="src/assets/images/footer.png" />
        </div>
    )
};

export default IndexPage;
