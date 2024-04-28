import { FC } from "react";
import styles from './button.module.scss'
import { IButtonProps } from "./button.interface";



export const Button: FC<IButtonProps> = ({ value, ...rest }) => (
    <button className={styles.button} {...rest}>
        {value}
    </button>
);
