<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/home">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Home</p>
      </sidebar-link>
      <sidebar-link to="/admin/cliente">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Clientes</p>
      </sidebar-link>
      <sidebar-link to="/admin/animal">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Animais</p>
      </sidebar-link>
      <sidebar-link to="/admin/funcionario">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Funcionarios</p>
      </sidebar-link>
      <sidebar-link to="/admin/agendamento">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Agendamentos</p>
      </sidebar-link>
      <sidebar-link to="/admin/produto">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Produtos</p>
      </sidebar-link>
      <sidebar-link to="/admin/venda">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Vendas</p>
      </sidebar-link>
      
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/admin/table-list">
        <i class="nc-icon nc-notes"></i>
        <p>Table list</p>
      </sidebar-link>
      <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-paper-2"></i>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/admin/icons">
        <i class="nc-icon nc-atom"></i>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/admin/maps">
        <i class="nc-icon nc-pin-3"></i>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link>

      
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
