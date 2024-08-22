import { Outlet, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
const ProtectedRoutes = () => {
  const cookies = new Cookies();
  const [user, setUser] = useState({
    userName: null,
    password: null,
  });

  useEffect(() => {
    setUser(cookies.get('user'));
  }, []);

  return user ? <Outlet /> : <Navigate to="/Login" />;
};

export default ProtectedRoutes;
