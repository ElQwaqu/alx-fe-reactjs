function About() {
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
        marginBottom: '3rem'
    };

    const sectionStyle = {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    };

    const teamStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
    };

    const memberStyle = {
        textAlign: 'center',
        padding: '1.5rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    };

    const avatarStyle = {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: '#3498db',
        margin: '0 auto 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold'
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h1 style={titleStyle}>About TechCorp Solutions</h1>
                <p style={subtitleStyle}>
                    We are a leading technology company dedicated to transforming businesses
                    through innovative digital solutions and cutting-edge technology.
                </p>
            </div>

            <div style={contentStyle}>
                <div style={sectionStyle}>
                    <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Our Mission</h2>
                    <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                        To empower businesses with technology solutions that drive growth,
                        efficiency, and innovation. We believe in creating lasting partnerships
                        with our clients and delivering exceptional value through our expertise.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Our Vision</h2>
                    <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                        To be the most trusted technology partner for businesses worldwide,
                        known for our innovative solutions, exceptional service, and
                        commitment to client success.
                    </p>
                </div>
            </div>

            <div style={sectionStyle}>
                <h2 style={{ color: '#2c3e50', marginBottom: '2rem', textAlign: 'center' }}>Our Team</h2>
                <div style={teamStyle}>
                    <div style={memberStyle}>
                        <div style={avatarStyle}>JS</div>
                        <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>John Smith</h3>
                        <p style={{ color: '#3498db', fontWeight: '500' }}>CEO & Founder</p>
                        <p style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>
                            20+ years in technology leadership
                        </p>
                    </div>

                    <div style={memberStyle}>
                        <div style={avatarStyle}>SJ</div>
                        <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Sarah Johnson</h3>
                        <p style={{ color: '#3498db', fontWeight: '500' }}>CTO</p>
                        <p style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>
                            Expert in software architecture
                        </p>
                    </div>

                    <div style={memberStyle}>
                        <div style={avatarStyle}>MD</div>
                        <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Mike Davis</h3>
                        <p style={{ color: '#3498db', fontWeight: '500' }}>Lead Developer</p>
                        <p style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>
                            Full-stack development specialist
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
