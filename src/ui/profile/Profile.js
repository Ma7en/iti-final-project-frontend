import React from 'react';
import './Profile.css'
import { useLocation, useNavigate } from 'react-router-dom';

const Profile = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = location.state || { user: { username: '', email: '' } };

    const handleLogout = () => {
      
        navigate('/');
    };

    return (
        <div className="profile-container">
        <h2 className="profile-title">Profile</h2>
        <div className="profile-info">
            <div className="info-item">
                <strong>Username:</strong> {user.username}
            </div>
            <div className="info-item">
                <strong>Email:</strong> {user.email}
            </div>
        </div>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </div>
    );
};

export default Profile;
