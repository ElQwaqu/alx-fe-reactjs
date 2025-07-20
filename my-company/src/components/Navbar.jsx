import { Link } from 'react-router-dom';

function Navbar() {
    const navStyle = {
        backgroundColor: '#333',
        padding: '1rem',
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center'
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px'
    };

    return (
        <nav style={navStyle}>
            <Link
                to="/"
                style={linkStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
                Home
            </Link>
            <Link
                to="/about"
                style={linkStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
                About
            </Link>
            <Link
                to="/services"
                style={linkStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
                Services
            </Link>
            <Link
                to="/contact"
                style={linkStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
                Contact
            </Link>
        </nav>
    );
}

export default Navbar;
