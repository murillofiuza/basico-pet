<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Sistema para Genrenciar PetShop</a>
     
      <div class="collapse navbar-collapse justify-content-end">
        
        <ul class="navbar-nav ml-auto">
          
          <base-dropdown title="Conta Perfil">
            <a class="dropdown-item" href="#">Notificação</a>
            <a class="dropdown-item" href="#">Editar Perfil</a>
            <a class="dropdown-item" href="#">Email</a>
            <div class="divider"></div>
            <a class="dropdown-item" href="#">Suporte</a>
          </base-dropdown>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Sair
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>

</style>
