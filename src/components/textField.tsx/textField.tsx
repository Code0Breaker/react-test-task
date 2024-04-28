import { FC } from 'react'
import styles from './textfiled.module.scss'
import { ITextFieldProps } from './textField.interface'

export const TextField: FC<ITextFieldProps> = ({ change, value }) => {
    return (
        <input placeholder='Search' className={styles.textfield} value={value} onChange={e => change(e.target.value)} />
    )
}