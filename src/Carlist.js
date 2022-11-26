const Carlist = (props) => {
    // using props without object Destructuring
    return (
        <>
        <h1>passing list via props</h1>
            {
                props.cars.map(car => (
                    <ul key={car.id}>
                        <li>{car.name}</li>
                        <li>{car.year}</li>
                        <li>{car.origin}</li>
                    </ul>
                ))
            }
        </>
    )
}
export default Carlist;
