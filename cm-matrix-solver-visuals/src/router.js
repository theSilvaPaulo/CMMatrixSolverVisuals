import MatrixTable from './components/MatrixTable.vue';
import HomePage from './components/HomePage.vue';
import CountTable from './components/CountTable.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/matrixtable', component: MatrixTable },
  { path: '/counttable', component: CountTable },
];

export default routes;