<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Visualizar Cliente</h4>
              
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/">Home</router-link>
                  <li class="breadcrumb-item"><router-link to="/admin/cliente">Lista de Clientes</router-link></li>
                  <li class="breadcrumb-item active" aria-current="page">Visualizar dados do Cliente</li>
                </ol>
              </nav>  
            
            
            <div class="typo-line">
              <h4 class="category">Nome do cliente</h4>
            </div>
            <table class="table table-striped">
              <tbody>
                <tr>
                  <td>
                    <div class="typo-line">
                      <b class="category">Nome:</b>
                  </div>
                </td>
                </tr>
                <tr>
                  <td>
                    <div class="typo-line"> 
                      <b class="category">Email:</b> 
                    </div>
                </td>
                </tr>
                <tr>
                  <td>
                    <div class="typo-line">
                      <b class="category">Data Aniversario:</b>
                  </div>
                </td>
                </tr>
                <tr>
                  <td>
                    <div class="typo-line">
                      <b class="category">Contato:</b>
                  </div>
                </td>
                </tr>
                <tr>
                  <td>
                    <div class="typo-line">
                      <b class="category">Endereço:</b>
                  </div>
                </td>
                </tr>
                <tr>
                  <td>
                    <div class="typo-line">
                      <b class="category">Numero:</b>
                  </div>
                </td>
                </tr>
                <tr>
                  <td>
                    <div class="typo-line">
                      <b class="category">Bairro:</b>
                  </div>
                </td>
                </tr>
                <tr>
                  <td>
                    <div class="typo-line">
                      <b class="category">Cidade:</b>
                  </div>
                </td>
                </tr>
                <tr>
                  <td>
                    <div class="typo-line">
                      <b class="category">Pais:</b>
                  </div>
                </td>
                </tr>
                <tr>
                  <td>
                    <div class="typo-line">
                      <b class="category">Cep:</b>
                  </div>
                </td>
                </tr>
              </tbody>
            </table>
          </template>
            
            
          </card>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'

  export default {
    components: {
      Card
    }
  }

</script>
<style>

</style>
