<template>
  <div class="container-fluid bg-modern">
    <div class="row">
      <div class="col-md-12">
        <router-link to="/" class="btn btn-light">Voltar</router-link>
        <br><br>
        <h3>Inverter Diagonais</h3>
        <MatrixForm @submitForm="submitForm" />
        <div v-if="showMatrix">
          <h3>Matriz original:</h3>
          <MatrixDisplay :matriz="matriz" />
          <div v-if="showInvertedMatrix">
            <h3>Matriz invertida:</h3 >
            <MatrixDisplay :matriz="invertedMatriz" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MatrixForm from "@/components/MatrixForm.vue";
import MatrixDisplay from "@/components/MatrixDisplay.vue";
import axios from "axios";
import { routerLink } from 'vue-router'

export default {
  components: {
    MatrixForm,
    MatrixDisplay,
    routerLink
  },
  data() {
    return {
      matriz: [],
      showMatrix: false,
      showInvertedMatrix: false,
      invertedMatriz: []
    };
  },
  methods: {
    async submitForm(matriz) {
      this.matriz = matriz;
      this.showMatrix = true;
      await this.sendMatrixData();
    },
    async sendMatrixData() {
      try {
        const response = await axios.post("http://localhost:5000/inverte-diagonais", { matriz: this.matriz });
        this.invertedMatriz = response.data.matriz_invertida;
        this.showInvertedMatrix = true;
        console.log("Resposta da requisição:", response.data);
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
