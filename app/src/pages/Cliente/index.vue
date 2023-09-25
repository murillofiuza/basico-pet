<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Lista de Cliente</h4>
              <p class="card-category">Clientes Cadastrados</p>
            </template>
            <router-link to="/admin/create-cliente" class="btn btn-info btn-fill float-left"> Cadastrar Cliente</router-link>
            <l-table class="table-hover table-striped"
                     :columns="table1.columns"
                     :data="table1.data">
            </l-table>
          </card>

        </div>

  

      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  const tableColumns = ['Id', 'Nome', 'Contato', 'Email', 'Ação']
  const tableData = [{
    id: 1,
    nome: 'Dakota Rice',
    contato: '$36.738',
    email: 'Niger',
    acao: 'Oud-Turnhout'
  },
  {
    id: 2,
    nome: 'Minerva Hooper',
    contato: '$23,789',
    email: 'Curaçao',
    acao: 'Sinaai-Waas'
  }]
  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }
</script>
<style>
</style>
