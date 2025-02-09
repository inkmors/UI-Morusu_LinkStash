import "./Header.css";

function Posts(props) {
    return (
        <div className="divHeader">
            <header>
                <img src="assets/icons8-gestão-de-desenvolvimento-comercial-100.png" alt="" />
                <h1>MORUSU</h1>
                <h1>LINKSTASH</h1>
            </header>

            <div className="divSearch">
                <input type="text" placeholder="Pesquisar..." />
                <button type="submit">
                    <img src="assets/icons8-pesquisar-50.png" alt="" />
                </button>
            </div>

            <div className="containnerBtnProfile">
                <button type="submit" id="btnAddPost">+</button>

                <div className="divProfile">
                    <div className="divUserPhoto">
                        <img src={props.iconUserLink} alt="" />
                    </div>

                    <div className="divNameUser">
                        <h2>{props.userName}</h2>
                        <p>{props.role}</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Posts