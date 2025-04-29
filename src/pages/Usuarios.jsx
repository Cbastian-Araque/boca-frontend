import React, { useState } from 'react';
import styles from './Usuarios.module.css';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Usuario #1', correo: 'usuario@test.com' },
    { id: 2, nombre: 'Usuario #2', correo: 'usuario.second@test.com' },
    { id: 3, nombre: 'Usuario #3', correo: 'usuario.third@test.com' },
    { id: 4, nombre: 'Usuario #4', correo: 'usuario.fourth@test.com' },
    { id: 5, nombre: 'Usuario #5', correo: 'usuario.fifth@test.com' },
    { id: 6, nombre: 'Usuario #6', correo: 'usuario.sixth@test.com' },
  ]);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;
  const [showModal, setShowModal] = useState(false); // Controla la visibilidad del modal
  const [editUser, setEditUser] = useState(null); // Almacena el usuario a editar

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  // Filtramos los usuarios en función del término de búsqueda
  const filteredUsers = usuarios.filter((usuario) =>
    usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.correo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Usamos la lista filtrada para mostrar los usuarios de la página actual
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEdit = (userId) => {
    const userToEdit = usuarios.find((usuario) => usuario.id === userId);
    setEditUser(userToEdit);
    setShowModal(true);
  };

  const handleSave = () => {
    const updatedUsers = usuarios.map((usuario) =>
      usuario.id === editUser.id ? editUser : usuario
    );
    setUsuarios(updatedUsers);
    setShowModal(false); // Cierra el modal después de guardar
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleDelete = (userId) => {
    const confirmation = window.confirm(`¿Seguro que deseas eliminar al usuario con ID: ${userId}?`);
    if (confirmation) {
      setUsuarios((prevUsuarios) => prevUsuarios.filter((usuario) => usuario.id !== userId));
      alert(`Usuario con ID: ${userId} eliminado`);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Resetea la página al inicio cuando se realiza una nueva búsqueda
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevenimos que el formulario recargue la página
  };

  return (
    <div>
      <h1 className={styles.titulo}>Lista de Usuarios</h1>

      <div className={styles.container_page}>
        <form className={styles.form_search} onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Buscar usuario"
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.input_search}
          />
          <button type="submit" className={styles.btn_search}>Buscar</button>
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
              {currentUsers.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.correo}</td>
                  <td className={styles.td_actions}>
                    <button
                      className={styles.btn_edit}
                      onClick={() => handleEdit(usuario.id)}
                    >
                      Editar
                    </button>
                    <button
                      className={styles.btn_delete}
                      onClick={() => handleDelete(usuario.id)}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className={styles.pagination}>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.pagination_button}
          >
            Anterior
          </button>
          <span className={styles.page_info}>
            Página {currentPage} de {Math.ceil(filteredUsers.length / usersPerPage)}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredUsers.length / usersPerPage)}
            className={styles.pagination_button}
          >
            Siguiente
          </button>
        </div>
      </div>

      {/* Modal de edición */}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <h2>Editar Usuario</h2>
            <label htmlFor="nombre">Nombre de usuario</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={editUser.nombre}
              onChange={handleInputChange}
            />
            <label htmlFor="correo">Correo</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={editUser.correo}
              onChange={handleInputChange}
            />
            <button onClick={handleSave}>Guardar</button>
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Usuarios;
