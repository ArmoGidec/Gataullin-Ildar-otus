<template>
    <div class="display-pad">
        <div class="row">
            <div class="col-12">
                13 * <span class="input-wrapper">__</span> * <span class="input-wrapper">__</span>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                = 82240
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Display',
};
</script>

<style lang="scss" scoped>
.display-pad {
    padding: 3rem 5rem;
    font-size: 2rem;
    color: rgb(141, 123, 123);

    .input-wrapper {
        display: inline-block;
        text-align: center;
        width: 4rem;
    }
}
</style>