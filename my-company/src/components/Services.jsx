function Services() {
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

    const servicesGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
    };

    const serviceCardStyle = {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    };

    const serviceIconStyle = {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#3498db',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem',
        fontSize: '1.5rem',
        color: 'white'
    };

    const processStyle = {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    };

    const stepsStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
    };

    const stepStyle = {
        textAlign: 'center',
        padding: '1rem'
    };

    const stepNumberStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#e74c3c',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1rem',
        fontWeight: 'bold'
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h1 style={titleStyle}>Our Services</h1>
                <p style={subtitleStyle}>
                    Comprehensive technology solutions designed to accelerate your business growth
                    and digital transformation journey.
                </p>
            </div>

            <div style={servicesGridStyle}>
                <div
                    style={serviceCardStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                    }}
                >
                    <div style={serviceIconStyle}>💻</div>
                    <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Web Development</h3>
                    <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                        Custom web applications built with modern frameworks like React, Vue, and Angular.
                        Responsive, fast, and user-friendly designs.
                    </p>
                </div>

                <div
                    style={serviceCardStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                    }}
                >
                    <div style={serviceIconStyle}>📱</div>
                    <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Mobile Development</h3>
                    <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                        Native and cross-platform mobile applications for iOS and Android.
                        User-centric design with optimal performance.
                    </p>
                </div>

                <div
                    style={serviceCardStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                    }}
                >
                    <div style={serviceIconStyle}>☁️</div>
                    <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Cloud Solutions</h3>
                    <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                        Scalable cloud infrastructure and migration services. AWS, Azure, and
                        Google Cloud platform expertise.
                    </p>
                </div>

                <div
                    style={serviceCardStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                    }}
                >
                    <div style={serviceIconStyle}>🔒</div>
                    <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Cybersecurity</h3>
                    <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                        Comprehensive security solutions to protect your business from cyber threats.
                        Security audits and compliance.
                    </p>
                </div>

                <div
                    style={serviceCardStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                    }}
                >
                    <div style={serviceIconStyle}>📊</div>
                    <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Data Analytics</h3>
                    <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                        Transform your data into actionable insights. Business intelligence
                        and machine learning solutions.
                    </p>
                </div>

                <div
                    style={serviceCardStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                    }}
                >
                    <div style={serviceIconStyle}>🛠️</div>
                    <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>IT Consulting</h3>
                    <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                        Strategic technology consulting to optimize your IT infrastructure
                        and digital transformation roadmap.
                    </p>
                </div>
            </div>

            <div style={processStyle}>
                <h2 style={{ color: '#2c3e50', textAlign: 'center', marginBottom: '1rem' }}>Our Process</h2>
                <p style={{ color: '#7f8c8d', textAlign: 'center', marginBottom: '2rem' }}>
                    A streamlined approach to deliver exceptional results
                </p>

                <div style={stepsStyle}>
                    <div style={stepStyle}>
                        <div style={stepNumberStyle}>1</div>
                        <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Discovery</h4>
                        <p style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>
                            Understanding your business needs and requirements
                        </p>
                    </div>

                    <div style={stepStyle}>
                        <div style={stepNumberStyle}>2</div>
                        <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Planning</h4>
                        <p style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>
                            Creating detailed project roadmap and timeline
                        </p>
                    </div>

                    <div style={stepStyle}>
                        <div style={stepNumberStyle}>3</div>
                        <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Development</h4>
                        <p style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>
                            Building solutions with agile methodology
                        </p>
                    </div>

                    <div style={stepStyle}>
                        <div style={stepNumberStyle}>4</div>
                        <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Delivery</h4>
                        <p style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>
                            Testing, deployment, and ongoing support
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
