import { FC, ReactNode } from "react"
import styles from './mainLayout.module.scss'
const MainLayout:FC<{children:ReactNode }> = ({children}) =>{
    return <div className={styles.layout}>{children}</div>
}

export default MainLayout