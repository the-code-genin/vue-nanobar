import NanoBar from 'nanobar'
import { VueConstructor } from 'vue/types/umd'
import { PluginOptions } from './types'


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

export * from './types'
export default Plugin