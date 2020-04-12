<template>
    <div id="app">
        <div class="container py-3">
            <div class="row">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5 mx-auto">
                    <div class="card shadow">
                        <div class="card-body pb-4">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { provideStore } from './composition/useStore';
/**
 * @type {import('vue').Component}
 */
const App = {
    name: 'App',
    setup(_, { root }) {
        provideStore(root.$store);
    }
};

export default App;
</script>

<style lang="scss" scoped>
.card-body {
    position: relative;
}
</style>
