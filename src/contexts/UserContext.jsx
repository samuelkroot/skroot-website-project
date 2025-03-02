import { createContext, useState } from 'react';

const UserContext = createContext();
export default UserContext;

export const UserProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    
    const loginUser = (user) => {
        setAuthUser(user);
    };
    const logoutUser = () => {
        setAuthUser(null);
    };

    return (
        <UserContext.Provider value={{ authUser, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
