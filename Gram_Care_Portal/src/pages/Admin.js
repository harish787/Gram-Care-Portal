import React from 'react';
import AdminPanel from '../components/AdminPanel';

const Admin = () => (
    <>
    <nav style={{ backgroundColor: '#f8f9fa', padding: '10px' }}>
                <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around', margin: 0, padding: 0 }}>
                    <li><Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>Home</Link></li>
                    <li><Link to="/admin" style={{ textDecoration: 'none', color: '#007bff' }}>Admin Panel</Link></li>
                    <li><Link to="/about" style={{ textDecoration: 'none', color: '#007bff' }}>About</Link></li>
                    <li><Link to="/contact" style={{ textDecoration: 'none', color: '#007bff' }}>Contact</Link></li>
                </ul>
            </nav>
    
        
    <div>
        <h1>Admin Panel</h1>
        <AdminPanel />
    </div>
     <footer style={{ backgroundColor: '#343a40', color: 'white', padding: '10px', marginTop: '20px' }}>
                <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around', margin: 0, padding: 0 }}>
                    <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
                    <li><Link to="/admin" style={{ textDecoration: 'none', color: 'white' }}>Admin Panel</Link></li>
                    <li><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link></li>
                    <li><Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link></li>
                </ul>
                <p style={{ textAlign: 'center', margin: 0 }}>© 2024 Gram Care Portal. All rights reserved.</p>
            </footer>
    </>
);

export default Admin;