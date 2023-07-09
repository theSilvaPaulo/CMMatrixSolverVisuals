<template>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="matrixAInput">Matriz:</label>
        <textarea v-model="matrixAInput" class="form-control" id="matrixAInput" rows="5" placeholder="Atenção à formatação&#10;x,x,x&#10;x,x,x&#10;x,x,x"></textarea>
      </div>
      <div class="form-group">
        <label for="matrixBInput">Submatriz:</label>
        <textarea v-model="matrixBInput" class="form-control" id="matrixBInput" rows="5" placeholder="Atenção à formatação&#10;x,x&#10;x,x"></textarea>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Contar</button>
      <br>
      <br>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        matrixAInput: '',
        matrixBInput: ''
      };
    },
    methods: {
      submitForm() {
        const matrizA = this.parseMatrixInput(this.matrixAInput);
        const matrizB = this.parseMatrixInput(this.matrixBInput);
        this.$emit("submitForm", { matrizA, matrizB });
      },
      parseMatrixInput(matrixInput) {
        const rows = matrixInput.trim().split('\n');
        return rows.map(row => row.split(',').map(cell => parseInt(cell.trim())));
      }
    }
  };
  </script>
  
  <style>
  .form-group {
    margin-bottom: 20px;
  }
  
  textarea {
    resize: vertical;
  }
  </style>
  