import  PropTypes from "prop-types";


function Card({children , reverse}){



    const className=`card ${reverse && "reverse"} `            

return (
<div   className = {className}>
  
  {children}

</div>
)


} 






Card.propTypes={

children : PropTypes.node,
reverse : PropTypes.bool

}



export default Card;