
import "./index.css"



function Header({text,color,bgColor}) {




    return (
        <header  style= {{color: color , backgroundColor: bgColor}}   >
            {text }   
        </header>
    )
}




Header.defaultProps ={

text : "FeedBack UI",
color: "red",
bgColor :  "blue"


}



export default Header

