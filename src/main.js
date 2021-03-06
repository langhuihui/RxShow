import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue';
import './assets/site.less';
import * as Icons from "@ant-design/icons-vue";
import Observable from './components/observable.vue'
const app = createApp(App);
app.use(Antd);
for (const i in Icons) {
    app.component(i, Icons[i]);
}
app.component('observable', Observable)
app.mount('#app')
