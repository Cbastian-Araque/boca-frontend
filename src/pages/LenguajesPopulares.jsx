import styles from './Tables.module.css';

export default function PageLenguajesPopulares() {
  return (
    <>
      <h2 className="text-5xl font-semibold text-gray-900">Ranking de los lenguajes más usados</h2>
      <br />
      <p>La siguiente tabla permite visualizar los lenguajes con mayor uso entre nuestros usuarios</p>
      <br /><br />
      <div className={styles.container_table_responsive}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <td>Nombre de lenguaje</td>
                      <td>Sitio web</td>
                      <td>Porcentaje de uso</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Python</td>
                      <td><a href="https://docs.python.org/3/">Documentación</a></td>
                      <td>35%</td>
                    </tr>
                    <tr>
                      <td>Java</td>
                      <td><a href="https://docs.oracle.com/en/java/">Documentación</a></td>
                      <td>25%</td>
                    </tr>
                    <tr>
                      <td>SQL</td>
                      <td><a href="https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/index.html">Documentación</a></td>
                      <td>20%</td>
                    </tr>
                    <tr>
                      <td>Python</td>
                      <td><a href="https://docs.python.org/3/">Documentación</a></td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>PHP</td>
                      <td><a href="https://www.php.net/manual/es/index.php">Documentación</a></td>
                      <td>8%</td>
                    </tr>
                    <tr>
                      <td>Ruby</td>
                      <td><a href="https://www.ruby-lang.org/en/documentation/">Documentación</a></td>
                      <td>2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
    </>
  )
}
