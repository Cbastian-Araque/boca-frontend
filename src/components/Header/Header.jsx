import './Header.css';

function HeaderMain(){
  return(
    <>
      <header className='header'>
        <img src="/src/assets/icons/logo.png" alt="Logo de sitio web" />
        
        <div className='info-user'>
          <p>Bienvenido <strong>@Admin</strong></p>
          <img src="/src/assets/icons/usuario.png" alt="Foto de usuario" />
        </div>
      </header>
    </>
  )
}

export default HeaderMain;