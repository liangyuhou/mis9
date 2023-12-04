import StandardContainer from './StandardContainer';

function StandardContainerGroup({ data }) {
    return (
        <div className="grid grid-cols-1">
            {data.map((item, index) => (
                <StandardContainer
                    key={index}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    image={item.image}
                    style={item.style}
                    path={item.path}
                />
            ))}
        </div>
    );
}

export default StandardContainerGroup;
