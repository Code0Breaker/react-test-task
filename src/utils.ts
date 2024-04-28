import { IUser } from "./global.interface";

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const filterUsers = (users: IUser[], value: string): IUser[] => {
    return users.filter(user =>
        `${user.name.first} ${user.name.last}`.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase()) ||
        user.phone.toLowerCase().includes(value.toLowerCase()) ||
        user.dob.date.includes(value) ||
        `${user.location.street.number} ${user.location.street.name} ${user.location.city} ${user.location.country} ${user.location.postcode}`
            .toLowerCase()
            .includes(value.toLowerCase())
    );
};

export const getAgeGroup = (age: number): string => {
    if (age >= 11 && age <= 20) return '11-20';
    if (age >= 21 && age <= 30) return '21-30';
    if (age >= 31 && age <= 40) return '31-40';
    if (age >= 41 && age <= 50) return '41-50';
    return '51+';
};