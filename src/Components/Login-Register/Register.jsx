import './Register.css';
import Title from './Title';

function Register() {
  return (
    <div className="Register">
      <Title />

      <form action="#" method='#'>

        <div className='divAlignInputs'>
          <div className='divPhoto'>
            <img src="assets/icons8-usuário-de-gênero-neutro-52.png" alt="imagem de perfil" />
          </div>
          <input id='inputEmail' type="text" placeholder='Email' />
        </div>

        <div className='divAlignInputs'>
          <div className='divPhoto'>
            <img src="assets/icons8-usuário-de-gênero-neutro-52.png" alt="imagem de perfil" />
          </div>
          <input id='inputTel' type="tel" placeholder='Telefone: (xx) xxxxx-xxxx' />
        </div>

        <div className='divAlignInputs'>
          <div className='divPhoto'>
            <img src="assets/icons8-cadeado-52.png" alt="imagem de cadeado" />
          </div>
          <input id='inputPassword' type="password" placeholder='Senha' />
        </div>

        <div className='divAlignInputs'>
          <div className='divPhoto'>
            <img src="assets/icons8-cadeado-52.png" alt="imagem de cadeado" />
          </div>
          <input id='inputRePassword' type="password" placeholder='Confirme sua senha' />
        </div>

        <div className='alignCheckbox'>
          <input type="checkbox" name="" id="" />
          <button type="submit" id='btnIdEnter'>Registar</button>
          <span>Já possui uma conta? <a href="." id="spanForgot">Fazer Login</a></span>
        </div>

      </form>
    </div>
  );
}

export default Register;
