<template>
    <div id="app">
        <SettingsPage />
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
