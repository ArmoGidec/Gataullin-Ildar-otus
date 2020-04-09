<template>
    <div id="app">
        <div class="container py-3">
            <div class="row">
                <div class="col-12 col-md-8 col-lg-6 col-xl-4 offset-md-2 offset-lg-3 offset-xl-4">
                    <div class="card">
                        <div class="card-body">
                            <SettingsPage />
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
    components: {
        SettingsPage: () => import('./pages/Settings'),
    }
};
</script>
