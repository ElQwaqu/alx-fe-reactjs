import { Link } from 'react-router-dom';

function Navbar() {
    const navStyle = {
        backgroundColor: '#2c3e50',
        padding: '1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    };

    const ulStyle = {
        listStyle: 'none',
        display: 'flex',
        gap: '2rem',
        margin: 0,
        padding: 0,
        justifyContent: 'center'
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.1rem',
        fontWeight: '500',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        transition: 'background-color 0.3s ease'
    };

    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li>
                    <Link
                        to="/"
                        style={linkStyle}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        style={linkStyle}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/services"
                        style={linkStyle}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        style={linkStyle}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
