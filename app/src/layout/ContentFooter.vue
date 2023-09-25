<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav>
        <ul class="footer-menu">
          <li>
            <router-link :to="{path:'/admin'}">Dashboard Home</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        &copy; Todos os direitos reservados
        <i class="fa fa-copyright"></i>
        Dev by Fiuza.
      </div>
    </div>
  </footer>
</template>
<script>
  export default {}

</script>
<style>

</style>
