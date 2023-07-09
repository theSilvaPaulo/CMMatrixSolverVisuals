<template>
  <div class="container-fluid bg-modern">
    <div class="row">
      <div class="col-md-12">
        <div class="jumbotron text-center">
          <h2 class="mb-4">
            TECHNICAL CHALLENGE | CM Tecnologia
          </h2>
          <p class="mb-4">
            Desenvolvido por Paulo Henrique Silva.
          </p>
          <p>
            Layouts simples, com objetivo único de permitir a visualização dos valores.
          </p>
          
          <p>
            Documentação disponível na página inicial do repositório no GitHub.
          </p>
        
          <div class="button-container text-center mt-4">
            <button class="btn btn-secondary rounded-pill mr-2" @click="goToMatrixTable">Inverter Diagonais</button>
            <button class="btn btn-primary rounded-pill" @click="goToCountTable">Contar Submatriz</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMatrixTable() {
      this.$router.push('/matrixtable');
    },
    goToCountTable() {
      this.$router.push('/counttable');
    }
  }
}
</script>

<style>
.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.bg-modern {
  background-color: #F3EDEE; /* Substitua pela cor moderna desejada */
}

.jumbotron {
  background-color: #F9FAFB;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.button-container {
  margin-top: 20px;
}

.btn {
  margin-right: 10px;
}

.rounded-pill {
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
