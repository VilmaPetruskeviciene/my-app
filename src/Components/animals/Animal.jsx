const Animal = ({zveris}) => {
    function randColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0');
    }
    
    return (
        <div>
            <figure className="picturePlace" key={zveris.id}>
            <img className="picture" src={zveris.img} alt={zveris.animal + "-zveris"} />
            <figcaption style={{background: randColor()}}>{zveris.animal}</figcaption>
            </figure>
        </div>
    );
}

export default Animal;