import React, { useState } from 'react';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, email, phone, message });
        // Reset form fields if needed
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };
    return (
        <div className="container-fluid text-left bg-secondary bg-gradient py-5">
            <div className="row align-items-start">
                <div className="col-12 col-md-4">
                    <div className="icon-link mx-auto">
                        <i className="bi bi-chat-square-text text-primary" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <h1 className="text-light">Contact Me</h1>
                    <p className="text-light">
                        Let's connect, I'd would love to hear from you! Whether it's about a project, job opportunity, or just to say hi, feel free to reach out to me!
                    </p>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="txtName"
                                            className="form-control"
                                            placeholder="Name *"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="txtEmail"
                                            className="form-control"
                                            placeholder="Email *"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            name="txtPhone"
                                            className="form-control"
                                            placeholder="Phone Number *"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <textarea
                                            name="txtMsg"
                                            className="form-control"
                                            placeholder="Message *"
                                            style={{ width: '100%', height: '150px' }}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        name="btnSubmit"
                                        className="btnContact btn btn-primary"
                                        value="Send Message"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}