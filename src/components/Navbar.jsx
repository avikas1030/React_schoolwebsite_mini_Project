import {Link} from 'react-router-dom'
const Navbar = ()=>{
    return (
        <nav style={{
            background: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 25px',
            boxShadow: '0 16px 8px 0 rgba(0, 0, 0, 0.1)'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
            <img 
            src="./image/logoAv.png"
            width="80"
            />
            <h1>Code School</h1>
            </div>
            <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                gap: '30px'
            }}>
                <li style={{                   
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px'
                }}>
                    <Link to="/" style={{
                        textDecoration: 'none',
                        color: "white",
                        fontSize: '18px',
                        background: 'dodgerblue',
                        padding: '12px 19px',
                        borderRadius: '4px'
                    }}>
                        Home
                    </Link>
                </li>
                
                <li style={{                   
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px'
                }}>
                    <Link to="/teachers" style={{
                        textDecoration: 'none',
                        color: "white",
                        fontSize: '18px',
                        background: 'dodgerblue',
                        padding: '12px 19px',
                        borderRadius: '4px'
                    }}>
                        Teachers
                    </Link>
                </li>
                
                <li style={{                   
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px'
                }}>
                    <Link to="/holidays" style={{
                        textDecoration: 'none',
                        color: "white",
                        fontSize: '18px',
                        background: 'dodgerblue',
                        padding: '12px 19px',
                        borderRadius: '4px'
                    }}>
                        Holidays
                    </Link>
                </li>
                
                <li style={{                   
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px'
                }}>
                    <Link to="/contact" style={{
                        textDecoration: 'none',
                        color: "white",
                        fontSize: '18px',
                        background: 'dodgerblue',
                        padding: '12px 19px',
                        borderRadius: '4px'
                    }}>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar