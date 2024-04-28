import { FC, ReactNode } from "react"
import styles from './cardsLayout.module.scss'

const CardsLayout:FC<{children:ReactNode[]}> = ({children}) => <main className={styles.content}>{children}</main>

export default CardsLayout