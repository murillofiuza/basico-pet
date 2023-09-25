import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Home from 'src/pages/Home.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'
import Cliente from 'src/pages/Cliente/index'
  import CreateCliente from 'src/pages/Cliente/create'
  import EditCliente from 'src/pages/Cliente/edit'
  import ShowCliente from 'src/pages/Cliente/show'
  
import Animal from 'src/pages/Animal/index'
import Funcionario from 'src/pages/Funcionario/index'
import Venda from 'src/pages/Venda/index'
import Produto from 'src/pages/Produto/index'
import Agendamento from 'src/pages/Agendamento'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/home'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'cliente',
        name: 'Cliente',
        component: Cliente
      },
      /**SUB PAGES DE CLIENTES**/
          {
            path: 'create-cliente',
            name: 'CreateCliente',
            component: CreateCliente
          },
          {
            path: 'edit-cliente',
            name: 'EditCliente',
            component: EditCliente
          },
          {
            path: 'show-cliente',
            name: 'ShowCliente',
            component: ShowCliente
          },
          
      {
        path: 'animal',
        name: 'Animal',
        component: Animal
      },
      {
        path: 'funcionario',
        name: 'Funcionario',
        component: Funcionario
      },
      {
        path: 'agendamento',
        name: 'Agendamento',
        component: Agendamento
      },
      {
        path: 'produto',
        name: 'Produto',
        component: Produto
      },
      {
        path: 'venda',
        name: 'Venda',
        component: Venda
      },
      
      
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
