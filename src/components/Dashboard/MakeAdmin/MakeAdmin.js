import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
        console.log(email);
    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount === 1) {
                    alert('admin added successfully!')
                }
            })


        e.preventDefault();


    }


    return (
        <div>
            <h1>MakeAdmin</h1>

            <form className="col-md-6" onSubmit={handleAdminSubmit}>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        onBlur={handleOnBlur}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;