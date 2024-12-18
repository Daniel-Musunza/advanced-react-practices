
import { createContext, useState, useEffect } from 'react';

export interface User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
    casualJobs: string;
    proffessionalJobs: string;
    location: string;
    userType: string;
    description: string;
    profileImage: any;
    link: string;
}

export interface ProfilesContextValue {
    users: User[];
    isLoading: boolean;
    error: string | null;
}

const ProfilesContext = createContext<ProfilesContextValue>({
    users: [],
    isLoading: false,
    error: null,
});

export const ProfilesProvider: React.FC<{ children: any }> = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
          setError(null);
      
          try {
            const response = await fetch('https://njookaziapi.qualityasoftwares.com/api/users/getUsers');
            const data = await response.json();
          
            setUsers(data);
          } catch (error: any) {
            setError(error.message);
          } finally {
            setIsLoading(false);
          }
        };
      
        fetchData();
      }, []);
    const contextValue: ProfilesContextValue = {
        users,
        isLoading,
        error,
    };
    return (
        <ProfilesContext.Provider value={contextValue} />
    );
  };
  
export default ProfilesContext;
