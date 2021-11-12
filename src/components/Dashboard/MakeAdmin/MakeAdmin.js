import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
        console.log(email);
    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://fierce-lake-75301.herokuapp.com/users/admin', {
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
        <div className="container px-0">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <p className="mt-2 fw-bold">Make Admin</p>
                <hr />
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <form onSubmit={handleAdminSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    onBlur={handleOnBlur}
                                    placeholder="Email"
                                    required
                                />
                                <label>Email</label>
                            </div>

                            <button type="submit" className="btn custom-black-btn">Make Admin</button>
                        </form>
                    </div>

                    <div className="col-md-6">
                        <p className="fw-bold">How to make a new admin</p>
                        <p>
                            Input any existing user email address of this website to create a new admin. Only an admin can create a new admin.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;