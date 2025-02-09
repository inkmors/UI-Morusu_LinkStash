import './Login.css';
import Title from './Title';

function Login(props) {
  return (
    <div className="login">
      <Title />
      
      <form action="#" method='#'>

        <div className='divAlignInputs'>
          <div className='divPhoto'>
            <img src="assets/icons8-usuário-de-gênero-neutro-52.png" alt="imagem de perfil" />
          </div>
          <input id='inputEmail' type="text" placeholder='Email' />
        </div>

        <div className='alignSpansError'>
          <div className='divAlignInputs'>
            <div className='divPhoto'>
              <img src="assets/icons8-cadeado-52.png" alt="imagem de cadeado" />
            </div>
            <input id='inputPassword' type="password" placeholder='Senha' />
          </div>
          <span className='spanError'>{props.Spanerror}</span>
        </div>

        <div className='alignCheckbox'>
          <button type="submit" id='btnIdEnter'>Entrar</button>
          <a href="." id="spanForgot">Esqueci minha senha</a>
        </div>

      </form>
    </div>
  );
}

export default Login;
