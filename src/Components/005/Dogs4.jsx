function Dogs4({index, name}) {
    return (
            <div>{name[0] === name[0].toUpperCase() ? null : name}</div>
            
    );
}

export default Dogs4;