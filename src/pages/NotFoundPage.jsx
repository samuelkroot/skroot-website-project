import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../components/Wrapper';


const NotFoundPage = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const redirect = setTimeout(() => {
            navigate('/');
        }, 5000);
        return () => {
            clearTimeout(redirect);
        };
    }, []);

    return (
        <Wrapper>
            <h1>404 Not Found</h1>
            <p>The requested URL could not be found on this server.</p>
            <p>If you are not redirected within 5 seconds click <Link to='/'>here</Link> to return to home.</p>
        </Wrapper>
    );
}

export default NotFoundPage;