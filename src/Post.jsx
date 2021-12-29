import {useParams,Navigate} from "react-router-dom"



function Post() {
const params=useParams()

const status =404



if(status===404){

return <Navigate  to="/notfound" />


}





    return (
        <div>
            <h1>Post:{params.id} </h1>
            <h3>Name:{params.name}</h3>
            <button >Go to About </button>
        </div>
    )
}

export default Post
