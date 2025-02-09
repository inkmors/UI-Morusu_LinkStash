import { useState } from "react"
import "./Posts.css"


function Posts(props) {

    const [isExpanded, setIsExpanded] = useState(false)

    const handlePlusClick = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className="divPostsAll">
            <div className="shortDiv">
                <div className="divIcon">
                    <img src={props.iconLink} alt="" />
                    <h2 className="h1Titie">{props.titlePost}</h2>
                </div>
                <p className="paragraphPlus" 
                    onClick={handlePlusClick}> 
                    {isExpanded ? "-" : "+"}
                </p>
            </div>

            {isExpanded && (
                <div className="expandedContent">
                    <hr />
                    <div className="divAlignContainner">
                        <div className="containerLinkSaved">
                            <h6>Link Salvo:</h6>
                        </div>

                        <div className="containerLink">
                            <a target="_blank" rel="noopener noreferrer" href={props.contentLink}>{props.contentLink}</a>
                        </div>
                    </div>

                    <textarea name="" id="" cols="28" rows="5" placeholder="Descrição..."></textarea>

                    <div className="divAlignButtons">
                        <button>Editar</button>
                        <button>Deletar</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Posts