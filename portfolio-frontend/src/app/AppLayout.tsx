import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/pedidos', label: 'Pedidos' },
  { to: '/clientes', label: 'Clientes' },
  { to: '/financeiro', label: 'Financeiro' },
]

export function AppLayout() {
  return (
    <div className="layout">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <aside className="layout__sidebar">
        <p className="layout__brand">Do pedido ao recebimento</p>
        <nav aria-label="Navegação principal">
          <ul className="layout__nav">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <p className="layout__notice">
          Projeto demonstrativo. Todos os dados são fictícios.
        </p>
      </aside>
      <main id="conteudo" className="layout__content">
        <Outlet />
      </main>
    </div>
  )
}
