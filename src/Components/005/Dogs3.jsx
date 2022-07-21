function Dogs3({index, name}) {
    return (
            <div style={index % 2 === 0 ? {backgroundColor: 'blue', height: '180px', width: '180px', textAlign: 'center', margin: '10px'} : {backgroundColor: 'blue', height: '180px', width: '180px', padding: '15px', margin: '10px', borderRadius: '50%'}}>{name}</div>
            
    );
}

export default Dogs3;