import React, { useState } from 'react';

const ComplaintForm = () => {
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('description', description);
        formData.append('image', image);

        await fetch('/api/complaints', {
            method: 'POST',
            body: formData,
        });
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
        <form onSubmit={submitHandler}>
            <textarea
                placeholder="Describe the issue"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <button type="submit">Submit</button>
        </form>
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

export default ComplaintForm;
