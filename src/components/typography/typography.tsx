import { FC } from "react"
import { ITypographyProps } from "./typography.interface"
import styles from './typography.module.scss'
export const Typography: FC<ITypographyProps> = ({ variant, value }) => <span className={styles[variant]}>{value}</span>;