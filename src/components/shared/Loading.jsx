import LoadingGif from "../assets/loading.gif"

function Loading() {
  return (
    <img 
    src={LoadingGif}
    alt="Loading..." 
    style={{width: "100px", margin: "auto", display: "block", color: "transparent"}} />
  )
}

export default Loading