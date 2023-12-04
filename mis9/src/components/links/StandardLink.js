import { NavLink } from 'react-router-dom';

function StandardLink({ path, name, className }) {
    return (
        <NavLink to={path} className={`${className} }`}>
            {name}
        </NavLink>
    );
}

export default StandardLink;
