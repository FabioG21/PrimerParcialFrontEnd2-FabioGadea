import React from "react";

const Card = ( user ) => {

return <>

    <h4>Muchas gracias, {user.name}!</h4>
    <h4>
        El libro que elegiste es {" "}
        {user.title}
    </h4>
 </>

};

export default Card;