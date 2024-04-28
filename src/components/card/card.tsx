import { FC } from 'react'
import { RemoveIcon } from '../../assets/removeIcon'
import { formatDate } from '../../utils'
import { Avatar } from '../avatar/avatar'
import { Typography } from '../typography/typography'
import { ICardProps } from './card.interface'
import styles from './card.module.scss'

export const Card: FC<ICardProps> = ({ user, handleDelete, setChooseCard, uuid }) => {
    return (
        <div className={`${styles.card} ${user.login.uuid === uuid ? styles.active : ''}`} onClick={() => setChooseCard(user.login.uuid)}>
            {user.login.uuid === uuid&&<button className={styles.remove} onClick={() => handleDelete(user.login.uuid)}>
                <RemoveIcon />
            </button>}
            <div className={styles.header}>
                <Avatar src={user.picture.thumbnail} />
                <div className={styles.info}>
                    <Typography value={`${user.name.first} ${user.name.last}`} variant='title' />
                    <Typography value={user.email} variant='simple' />
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.detail}>
                    <div className={styles.info}>
                        <Typography value='Phone No' variant='caption' />
                    </div>
                    <Typography value={user.phone} variant='simple' />
                </div>
                <div className={styles.detail}>
                    <div className={styles.info}>
                        <Typography value='Birthday' variant='caption' />
                    </div>
                    <Typography value={formatDate(user.dob.date)} variant='simple' />
                </div>
                <div className={styles.detail}>
                    <div className={styles.info}>
                        <Typography value='Address' variant='caption' />
                    </div>
                    <Typography value={`${user.location.city}, ${user.location.state} ${user.location.country}`} variant='simple' />
                </div>
            </div>
        </div>
    )
}