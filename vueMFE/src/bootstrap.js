import { createApp } from 'vue';
import App from './App.vue';

const mount = (el) => {
    createApp(App).mount(el);
};

if (process.env.NODE_ENV === "development") {  
    const rootElement = document.getElementById('vue-app');

    if(rootElement) {
        mount(rootElement)
    }
}

export { mount }