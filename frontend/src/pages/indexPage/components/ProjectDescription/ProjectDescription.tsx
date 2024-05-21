import React from "react"
import classNames from "classnames"

import styles from './styles.module.css'
import TextBlock, { TTextBlockProps } from "../../../../shared/ui/textBlock/TextBlock"

const descriptionData: TTextBlockProps[] = [
    {header: 'Наименование ДПП', text: 'Цифровое моделирование и суперкомпьютерные технологии', alignment: 'left'},
    {
        header: 'Наименование проекта',
        text: 'Разработка админ панели для работы с базой клиентов и обучение модели персональных рекомендаций',
        alignment: 'right',
    },
    {
        header: 'Цель проекта',
        text: 'Разработать MVP админ панели для интернет-магазина Wildberries с моделью персональных рекомендаций, для улучшения пользовательского опыта, удовлетворенности клиентов и повышения продажи в заданные учебным проектом сроки.',
        alignment: 'left',
    }
]

type TProjectDescriptionProps = {
    className?: string,
}

const ProjectDescription = ({className}: TProjectDescriptionProps) => {
    return (
        <div className={classNames(styles.rootDescription, className)}>
           <div className={styles.main}>
                {Array.from({length: 6}).map((_, i) => (
                    <div
                        key={i}
                        className={classNames(styles.item, styles[`row-${i + 2}`], styles[`column-2`])}
                    />    
                ))}
                {descriptionData.map(({header, text, alignment}, i) => (
                    <TextBlock
                        key={i}
                        header={header}
                        text={text}
                        alignment={alignment}
                        className={classNames(styles.item, styles[`row-${i + 2}`], styles[`column-${((i + 1) % 2) + 1}`])}
                    />
                ))}
           </div>
        </div>
    )
};

export default ProjectDescription;
