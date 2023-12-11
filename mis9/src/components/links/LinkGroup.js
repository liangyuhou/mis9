import { NavLink } from 'react-router-dom';

const SublinkWrapper = ({ children, title }) => {
    return (
        <div>
            <div className="font-bold text-xs pb-3 text-gray-700">{title}</div>
            <div className="flex flex-col gap-3">{children}</div>
        </div>
    );
};

const Sublink = ({ path, name }) => {
    return (
        <NavLink to={path}>
            <div className="text-xs hover:underline">{name}</div>
        </NavLink>
    );
};

function LinkGroup() {
    return <div className="grid grid-cols-5 border-t border-t-gray-400 py-5"></div>;
}

export default LinkGroup;
