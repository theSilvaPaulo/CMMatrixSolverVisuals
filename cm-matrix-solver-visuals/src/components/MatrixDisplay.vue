<template>
    <table class="table table-bordered table-responsive">
      <tbody>
        <tr v-for="(row, rowIndex) in matriz" :key="rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    props: ["matriz"]
  };
  </script>
  