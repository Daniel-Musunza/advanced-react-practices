import React, { useContext, useEffect } from 'react';
import ProfilesContext from '../../contexts/home/ProfilesContext';

function HomeShell() {
  const { users, isLoading, error } = useContext(ProfilesContext);

  
    console.log(users, isLoading, error); 

  if (isLoading) {
    return <div className='text-black'>Loading...</div>;
  }

  if (error) {
    return <div className='text-red-700'>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-12 h-screen">
      <aside className="col-span-2 bg-slate-500">
        {/* Content for aside */}
      </aside>
      <main className="col-span-10 text-slate-600">
        {users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default HomeShell;