<template>
    <div class="game-modal">
        <div class="card">
            <div class="card-header">
                Игра окончена
                <router-link class="float-right" :to="{name: 'settings'}">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </router-link>
            </div>
            <div class="card-body">
                <slot>Modal</slot>
            </div>
            <div class="card-footer">
                <router-link class="btn btn-primary btn-rounded" :to="{name: 'settings'}">
                    Перейти к настройкам
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * @type {import('vue').Component}
 */
const Modal = {
    name: 'Modal',
}

export default Modal;
</script>

<style lang="scss" scoped>
    .game-modal {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba($color: #000000, $alpha: 0.8);
        z-index: 10;
        padding: 1.3rem 2rem;
    }
</style>