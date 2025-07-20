function Home() {
    const containerStyle = {
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#ecf0f1',
        minHeight: '80vh'
    };

    const heroStyle = {
        backgroundColor: '#3498db',
        color: 'white',
        padding: '4rem 2rem',
        borderRadius: '8px',
        marginBottom: '2rem'
    };

    const titleStyle = {
        fontSize: '3rem',
        marginBottom: '1rem',
        fontWeight: 'bold'
    };

    const subtitleStyle = {
        fontSize: '1.5rem',
        marginBottom: '2rem',
        opacity: 0.9
    };

    const buttonStyle = {
        backgroundColor: '#e74c3c',
        color: 'white',
        padding: '1rem 2rem',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1.1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    };

    const featuresStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '3rem'
    };

    const featureCardStyle = {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    };

    return (
        <div style={containerStyle}>
            <div style={heroStyle}>
                <h1 style={titleStyle}>Welcome to TechCorp Solutions</h1>
                <p style={subtitleStyle}>
                    Innovative technology solutions for modern businesses
                </p>
                <button
                    style={buttonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#c0392b'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#e74c3c'}
                >
                    Get Started
                </button>
            </div>

            <div style={featuresStyle}>
                <div style={featureCardStyle}>
                    <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Quality Solutions</h3>
                    <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                        We deliver high-quality, scalable solutions tailored to your business needs.
                    </p>
                </div>
                <div style={featureCardStyle}>
                    <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Expert Team</h3>
                    <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                        Our experienced professionals bring years of expertise to every project.
                    </p>
                </div>
                <div style={featureCardStyle}>
                    <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>24/7 Support</h3>
                    <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                        Round-the-clock support ensures your business never stops running.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
