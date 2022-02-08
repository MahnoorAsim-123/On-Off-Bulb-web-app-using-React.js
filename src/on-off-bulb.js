import React , {useState} from "react";
import BulbImage1 from "./assets/on.png";
import BulbImage2 from "./assets/off.png";
import  "./style.css";


const Toggle = () => {

   const [bulbTurnOn , setBulbTurnOn] = useState(false)

   const bulbON = () => setBulbTurnOn(true)
//    console.log(bulbTurnOn)

   const bulbOFF = () => setBulbTurnOn(false)


    return(
        <>
           <div className="mainContainer">

         
            <div className="myImg">

                
            {bulbTurnOn ? <img src={BulbImage1} />  : <img src = {BulbImage2} /> }

             
            </div>
           
            <br />
            <br />

            <div className="myBtns">
                <button onClick={bulbON}  className="btn1">On</button>
                <button onClick={bulbOFF} className="btn2">Off</button>
            </div>

           </div>

        </>
    )

};

export default Toggle;



