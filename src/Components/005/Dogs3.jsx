function Dogs3({index, name}) {
    return (
            <div style={index % 2 === 0 ? {backgroundColor: 'blue', padding: '15px', margin: '10px', borderRadius: '0'} : {backgroundColor: 'blue', padding: '15px', margin: '10px', borderRadius: '50%'}}>{name}</div>
            
    );
}

export default Dogs3;