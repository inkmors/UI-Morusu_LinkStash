import "./Header.css";

function Posts(props) {
    return (
        <div className="divHeader">
            <header>
                <div className="divLogotype">
                    <img src="assets/icons8-gestão-de-desenvolvimento-comercial-100.png" alt="asset de logotipo" />
                    <div className="alignTitleLogotype">
                        <h1>MORUSU</h1>
                        <p>LinkStash</p>
                    </div>
                </div>

                <div className="divSearch">
                    <input type="text" placeholder="Pesquisar..." />
                    <button type="submit">
                        <img src="assets/icons8-pesquisar.svg" alt="asset de pesquisar" />
                    </button>
                </div>

                <div className="containnerBtnProfile">
                    <div className="divAddBtn">
                        <button type="submit" id="btnAddPost">+</button>
                        <p>Novo</p>
                    </div>

                    <div className="divProfile">
                        <div className="divUserPhoto">
                            <img src={props.iconUserLink} alt="asset de perfil" />
                        </div>

                        <div className="divNameUser">
                            <h2>{props.userName}</h2>
                            <p>{props.role}</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Posts