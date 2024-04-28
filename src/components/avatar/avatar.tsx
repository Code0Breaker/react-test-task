import { FC } from "react";
import { IAvatarProps } from "./avatar.interface";
import styles from './avatar.module.scss';

export const Avatar: FC<IAvatarProps> = ({ src, alt }) => <img className={styles.avatar} src={src} alt={alt} />