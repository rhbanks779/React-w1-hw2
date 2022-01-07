
export default function Bedroom(props){
    return(
        <div className="container beds">
            <div className='cell bed1'><h2>Bedroom {props.number1}</h2></div>
            <div className='cell bed2'><h2>Bedroom {props.number2}</h2></div>
            <div className='cell bed3'><h2>Bedroom {props.number3}</h2></div>
        </div>
    )
}