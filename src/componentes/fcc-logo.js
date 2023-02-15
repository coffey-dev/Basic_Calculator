import React from "react";
import freeCodeCampLogo from "../imagenes/freecodecamp.png";

function FccLogo () {
return (
<div className='freecodecamp-logo-contenedor'>

 <img src={freeCodeCampLogo}
 className="freecodecamp-logo"
 alt="Logo de freecodecamp" />

 </div>)
};

export default FccLogo;