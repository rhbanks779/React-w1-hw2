import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bath from "./Bath";
import Bedroom from "./Bedroom";

export default function FloorPlan(){
    return(
        <div className="container">
        <Kitchen />
        <LivingRoom />
        <Bedroom number1='1' number2='2' number3='3'/>
        <Bath size1="Full " size2="Half "/>
        
        </div>
    );
}