<template>
    <div class="container-fluid bg-modern">
      <div class="row">
        <div class="col-md-12">
          <router-link to="/" class="btn btn-light">Voltar</router-link>
          <br><br>
          <h3>Contagem de Submatriz</h3>
          <CountForm @submitForm="submitForm" />
          <div v-if="showResult">
            <h3>Ocorrências da submatriz na matriz:</h3>
            <p>{{ submatrixCount }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CountForm from "@/components/CountForm.vue";
  import axios from "axios";
  
  export default {
    components: {
      CountForm
    },
    data() {
      return {
        matrizA: [],
        matrizB: [],
        showResult: false,
        submatrixCount: null
      };
    },
    methods: {
      async submitForm(matrizes) {
        this.matrizA = matrizes.matrizA;
        this.matrizB = matrizes.matrizB;
        await this.sendMatrixData();
      },
      async sendMatrixData() {
        try {
          const requestData = {
            matriz: this.matrizA,
            submatriz: this.matrizB
          };
  
          const response = await axios.post("http://localhost:5000/conta-submatriz", requestData);
          this.submatrixCount = response.data.contagem;
          this.showResult = true;
          console.log("Contagem de Submatriz:", this.submatrixCount);
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>

  <style>
  .container-fluid {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  </style>
  