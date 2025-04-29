import { Link } from 'react-router-dom';
import './SidebarMenu.css';
import { useState } from 'react';

function SidebarMenu({ list }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <aside className={open ? 'active' : ''}>
        <h3>Boca Menu</h3>
        <nav>
          <ul onClick={() => setOpen(false)}>
            {list.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default SidebarMenu;
