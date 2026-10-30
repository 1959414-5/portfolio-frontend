import { createHashRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '@/app/AppLayout'
import { CustomersPage } from '@/features/customers'
import { FinancePage } from '@/features/finance'
import { OrdersPage } from '@/features/orders'

// HashRouter: o GitHub Pages não reescreve rotas no servidor (ver docs/adr/0003).
export const routes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/pedidos" replace /> },
      { path: 'pedidos', element: <OrdersPage /> },
      { path: 'clientes', element: <CustomersPage /> },
      { path: 'financeiro', element: <FinancePage /> },
    ],
  },
]

export const router = createHashRouter(routes)
