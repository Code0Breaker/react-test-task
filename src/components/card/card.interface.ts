import { IUser } from "../../global.interface";

export interface ICardProps {
    user: IUser
    handleDelete: (uuid: string) => void
    setChooseCard: (uuid: string) => void
    uuid: string | null
}