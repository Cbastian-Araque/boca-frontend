import styles from './Usuarios.module.css';

function Usuarios() {
  return (
    <div>
      <h1 className={styles.titulo}>Lista de Usuarios</h1>

      <div className={styles.container_page}>
        <form className={styles.form_search}>
          <input type="text" placeholder='Búscar usuario' />
          <button type='submit'>Buscar</button>
        </form>

        <div className={styles.container_table_responsive}>
          <table className={styles.table}>
            <thead>
              <tr>
                <td>ID</td>
                <td>Nombre de usuario</td>
                <td>Correo</td>
                <td>Acciones</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Usuario #1</td>
                <td>usuario@test.com</td>
                <td className={styles.td_actions}>
                  <button className={styles.btn_edit}>Editar</button>
                  <button className={styles.btn_delete}>Borrar</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Usuario #2</td>
                <td>usuario.second@test.com</td>
                <td className={styles.td_actions}>
                  <button className={styles.btn_edit}>Editar</button>
                  <button className={styles.btn_delete}>Borrar</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Usuario #3</td>
                <td>usuario.third@test.com</td>
                <td className={styles.td_actions}>
                  <button className={styles.btn_edit}>Editar</button>
                  <button className={styles.btn_delete}>Borrar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
