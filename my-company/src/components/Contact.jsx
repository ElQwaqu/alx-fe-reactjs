import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const containerStyle = {
        padding: '2rem',
        backgroundColor: '#f8f9fa',
        minHeight: '80vh'
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '3rem'
    };

    const titleStyle = {
        fontSize: '2.5rem',
        color: '#2c3e50',
        marginBottom: '1rem'
    };

    const subtitleStyle = {
        fontSize: '1.2rem',
        color: '#7f8c8d',
        maxWidth: '600px',
        margin: '0 auto',
        lineHeight: '1.6'
    };

    const contentStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '3rem',
        maxWidth: '1200px',
        margin: '0 auto'
    };

    const formStyle = {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    };

    const inputGroupStyle = {
        marginBottom: '1.5rem'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        color: '#2c3e50',
        fontWeight: '500'
    };

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        border: '2px solid #ddd',
        borderRadius: '4px',
        fontSize: '1rem',
        transition: 'border-color 0.3s ease',
        boxSizing: 'border-box'
    };

    const textareaStyle = {
        ...inputStyle,
        height: '120px',
        resize: 'vertical'
    };

    const buttonStyle = {
        backgroundColor: '#3498db',
        color: 'white',
        padding: '1rem 2rem',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1.1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        width: '100%'
    };

    const infoStyle = {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    };

    const contactItemStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1.5rem',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '6px'
    };

    const iconStyle = {
        fontSize: '1.5rem',
        marginRight: '1rem',
        width: '40px'
    };

    const successMessageStyle = {
        backgroundColor: '#d4edda',
        color: '#155724',
        padding: '1rem',
        borderRadius: '4px',
        marginBottom: '1rem',
        border: '1px solid #c3e6cb'
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h1 style={titleStyle}>Contact Us</h1>
                <p style={subtitleStyle}>
                    Get in touch with our team to discuss your project requirements.
                    We're here to help you transform your business with technology.
                </p>
            </div>

            <div style={contentStyle}>
                <div style={formStyle}>
                    <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Send us a Message</h2>

                    {isSubmitted && (
                        <div style={successMessageStyle}>
                            Thank you, {formData.name}! Your message has been sent successfully.
                            We'll get back to you soon.
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div style={inputGroupStyle}>
                            <label style={labelStyle} htmlFor="name">Full Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                style={inputStyle}
                                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                                onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                required
                            />
                        </div>

                        <div style={inputGroupStyle}>
                            <label style={labelStyle} htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                style={inputStyle}
                                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                                onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                required
                            />
                        </div>

                        <div style={inputGroupStyle}>
                            <label style={labelStyle} htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                style={inputStyle}
                                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                                onBlur={(e) => e.target.style.borderColor = '#ddd'}
                            />
                        </div>

                        <div style={inputGroupStyle}>
                            <label style={labelStyle} htmlFor="subject">Subject *</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                style={inputStyle}
                                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                                onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                required
                            />
                        </div>

                        <div style={inputGroupStyle}>
                            <label style={labelStyle} htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                style={textareaStyle}
                                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                                onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                placeholder="Tell us about your project..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            style={buttonStyle}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div style={infoStyle}>
                    <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Get in Touch</h2>

                    <div style={contactItemStyle}>
                        <span style={iconStyle}>📍</span>
                        <div>
                            <h4 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>Address</h4>
                            <p style={{ margin: 0, color: '#7f8c8d' }}>
                                123 Tech Street, Innovation District<br />
                                San Francisco, CA 94105
                            </p>
                        </div>
                    </div>

                    <div style={contactItemStyle}>
                        <span style={iconStyle}>📞</span>
                        <div>
                            <h4 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>Phone</h4>
                            <p style={{ margin: 0, color: '#7f8c8d' }}>
                                +1 (555) 123-4567
                            </p>
                        </div>
                    </div>

                    <div style={contactItemStyle}>
                        <span style={iconStyle}>✉️</span>
                        <div>
                            <h4 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>Email</h4>
                            <p style={{ margin: 0, color: '#7f8c8d' }}>
                                info@techcorp.com<br />
                                support@techcorp.com
                            </p>
                        </div>
                    </div>

                    <div style={contactItemStyle}>
                        <span style={iconStyle}>🕐</span>
                        <div>
                            <h4 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>Business Hours</h4>
                            <p style={{ margin: 0, color: '#7f8c8d' }}>
                                Monday - Friday: 9:00 AM - 6:00 PM<br />
                                Saturday: 10:00 AM - 4:00 PM<br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
