import styles from './Tables.module.css';

export default function PagePuntajes() {
  return (
    <>
      <h2 className="text-5xl font-semibold text-gray-900">Ranking de puntajes</h2>
      <br />
      <p>La siguiente tabla permite visualizar los usuarios con mejor puntaje en la resolución de pruebas con el lenguaje utilizado</p>
      <br /><br />
      <div className={styles.container_table_responsive}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <td>Nombre de usuario</td>
                      <td>Tiempo hh:mm:ss</td>
                      <td>Puntaje/100</td>
                      <td>Lenguaje usado</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Usuario#3</td>
                      <td>01:15:09</td>
                      <td>86/100</td>
                      <td>Ruby</td>
                    </tr>
                    <tr>
                      <td>Usuario#1</td>
                      <td>01:22:44</td>
                      <td>83/100</td>
                      <td>Python</td>
                    </tr>
                    <tr>
                      <td>Usuario#2</td>
                      <td>01:57:18</td>
                      <td>77/100</td>
                      <td>Javascript</td>
                    </tr>
                  </tbody>
                </table>
              </div>
    </>
  )
}
