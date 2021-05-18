import NanoBar from 'nanobar'
import PluginOptions from './plugin-options'
import { VueConstructor } from 'vue/types/umd'


class Plugin {
    install(vue: VueConstructor, options: PluginOptions) {
        const nanoBar = new NanoBar();

        options.router.beforeEach((to, from, next) => {
            nanoBar.go(30);
            next();
        });
          
        options.router.afterEach(() => {
            nanoBar.go(100);
        });
    }
}

export default Plugin