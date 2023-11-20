import { NavLink } from 'react-router-dom';

function StandardLink({ path, name, className }) {
    return (
        <NavLink
            to={path}
            className={`${className} bg-blue-500 text-white px-4 py-2 h-full ease-in-out rounded-lg`}
        >
            {name}
        </NavLink>
    );
}

export default StandardLink;
