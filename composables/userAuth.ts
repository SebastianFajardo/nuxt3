export const useUserAuth = () => {
    let user = null;
    const setUser = (userData) => {
        user = userData;
    };

    const getUser = () => {
        return user
    };

    return { getUser, setUser };
};