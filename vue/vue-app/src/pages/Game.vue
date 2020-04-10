<template>
    <fragment>
        <div class="row">
            <div class="col-6">
                <router-link :to="{name: 'settings'}" class="btn btn-light shadow px-3">
                    <i class="fa fa-times" aria-hidden="true"></i>
                    Отмена
                </router-link>
            </div>
            <div class="col-6">
                <Timer />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <Display/>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <Keypad/>
            </div>
        </div>
    </fragment>
</template>

<script>
export default {
    name: 'Game',
    components: {
        Timer: () => import('../components/Timer'),
        Display: () => import('../components/Display'),
        Keypad: () => import('../components/Keypad'),
    },
};
</script>