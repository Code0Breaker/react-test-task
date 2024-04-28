import { FC, ReactNode } from "react";
import styles from './header.module.scss'
export const Header:FC<{children:ReactNode[]}> = ({children}) =>{
    return <header className={styles.header}>{children}</header>
}