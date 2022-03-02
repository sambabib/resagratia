import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DashboardPrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to='/signin' replace />;
  }

  if (currentUser.displayName === null || currentUser.displayName === '') {
    return <Navigate to='/user-details' replace />
  }

  return (
    children
  )
}

export default DashboardPrivateRoute