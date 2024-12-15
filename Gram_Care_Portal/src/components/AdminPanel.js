import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        const fetchComplaints = async () => {
            const res = await fetch('/api/complaints');
            const data = await res.json();
            setComplaints(data);
        };
        fetchComplaints();
    }, []);

    const updateStatus = async (id, status) => {
        await fetch(`/api/complaints/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status }),
        });
        setComplaints((prev) =>
            prev.map((complaint) =>
                complaint._id === id ? { ...complaint, status } : complaint
            )
        );
    };
    return (
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
            <h2>Manage Complaints</h2>
            <ul>
                {complaints.map((complaint) => (
                    <li key={complaint._id}>
                        <p>{complaint.description}</p>
                        <button onClick={() => updateStatus(complaint._id, 'Resolved')}>Mark Resolved</button>
                    </li>
                ))}
            </ul>
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
};

export default AdminPanel;