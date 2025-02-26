import { createContext, useState } from 'react';

const UserContext = createContext();
export default UserContext;

export const UserProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState(null);
    
    const loginUser = (user) => {
        setCurrUser(user);
    };
    const logoutUser = () => {
        setCurrUser(null);
    };

    return (
        <UserContext.Provider value={{ currUser, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
