import { FC } from 'react'
import { Typography } from '../typography/typography'
import styles from './sidebar.module.scss'
import { ISidebarProps } from './sidebar.interface'

export const Sidebar: FC<ISidebarProps> = ({ count, ageGroups, genderGroups }) => (
    <div className={styles.sidebar}>
        <Typography value={`${count} Users`} variant='title' />
        <hr className={styles.divider} />
        <Typography value='Age Groups' variant='title' />
        <div className={styles.info}>
            {Object.entries(ageGroups).map(ageGroup => {
                return <div>
                    <span className={styles.title}>
                        <Typography value={ageGroup[0]} variant='caption' />
                    </span>
                    <Typography value={ageGroup[1]} variant='simple' />
                </div>
            })}
        </div>
        <hr className={styles.divider} />
        <Typography value='Gender Groups' variant='title' />
        <div className={styles.info}>
            {Object.entries(genderGroups).map(genderGroup => {
                return <div>
                    <span className={styles.title}>
                        <Typography value={genderGroup[0]} variant='caption' />
                    </span>
                    <Typography value={genderGroup[1]} variant='simple' />
                </div>
            })}
        </div>
    </div>
)