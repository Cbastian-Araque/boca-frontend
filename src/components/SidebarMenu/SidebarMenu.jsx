import './SidebarMenu.css';

function SidebarMenu({list}){
  return(
    <>
    <aside>
      <h3>Boca Menu</h3>
      <nav>
        <ul>
          {list.map((item,index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
    </>
  )
}

export default SidebarMenu;