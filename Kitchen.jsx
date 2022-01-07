import Oven from "./Oven";
import Sink from "./Sink";

export default function Kitchen(){
    return(
        <div className="cell kit">
            <div><h2>Kitchen</h2></div>
            <Oven />
            <Sink />
        </div>
    )
}