<template>
    <div id="app">
        <div class="container py-3">
            <div class="row">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5 mx-auto">
                    <div class="card shadow">
                        <div class="card-body">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>
