
export default function Bath(props){
    return(
        <div className='container baths'>
            <div className='cell bath1'><h2>{props.size1} Bath</h2></div>
            <div className='cell bath2'><h2>{props.size2} Bath</h2></div>

        </div>
    )
}