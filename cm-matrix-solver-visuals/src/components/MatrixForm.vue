<template>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="matrixInput">Insira uma matriz quadrada:</label>
        <textarea v-model="matrixInput" class="form-control" id="matrixInput" rows="5" placeholder="Atenção à formatação&#10;x,x,x&#10;x,x,x&#10;x,x,x"></textarea>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Inverter diagonais</button>
      <br>
      <br>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        matrixInput: ''
      };
    },
    methods: {
      submitForm() {
        const matriz = this.parseMatrixInput();
        this.$emit("submitForm", matriz);
      },
      parseMatrixInput() {
        const rows = this.matrixInput.trim().split('\n');
        return rows.map(row => row.split(',').map(cell => parseInt(cell.trim())));
      }
    }
  };
  </script>
  