import { useEffect, useState } from "react";
import { getUsers } from "../Apis/baseApi";
import { initialAgeGroups, initialGenderGroups } from "../constants";
import { IDinamicN, IUser } from "../global.interface";
import { getAgeGroup } from "../utils";

export const useGetUsers = () => {
    const [users, setUsers] = useState<IUser[]|null>(null);
    const [ageGroups, setAgeGroups] = useState<IDinamicN>(initialAgeGroups);
    const [genderGroups, setGenderGroups] = useState<IDinamicN>(initialGenderGroups);

    const updateUserGroups = (userData: IUser[]) => {
        const ageGroupsCount = { ...initialAgeGroups };
        const genderGroupsCount = { ...initialGenderGroups };

        userData.forEach(user => {
            const ageGroup = getAgeGroup(user.dob.age);
            ageGroupsCount[ageGroup] += 1;
            genderGroupsCount[user.gender] += 1;
        });

        setAgeGroups(ageGroupsCount);
        setGenderGroups(genderGroupsCount);
    };

    const fetchAndUpdateUsers = async () => {
        try {
            const userData = await getUsers();
            setUsers(userData);
            updateUserGroups(userData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchAndUpdateUsers();
    }, []);

    const handleDelete = (uuid: string) => {
        if (!users) return;

        const userToDelete = users.find(user => user.login.uuid === uuid);
        if (!userToDelete) return;

        users&&setUsers(users?.filter(user => user.login.uuid !== uuid));

        const ageGroup = getAgeGroup(userToDelete.dob.age);
        setAgeGroups(prevAgeGroups => ({
            ...prevAgeGroups,
            [ageGroup]: prevAgeGroups[ageGroup] - 1
        }));

        setGenderGroups(prevGenderGroups => ({
            ...prevGenderGroups,
            [userToDelete.gender]: prevGenderGroups[userToDelete.gender] - 1
        }));
    };

    const updateUsers = async () => {
        fetchAndUpdateUsers();
    };

    return {
        users,
        ageGroups,
        genderGroups,
        updateUsers,
        handleDelete
    };
};
