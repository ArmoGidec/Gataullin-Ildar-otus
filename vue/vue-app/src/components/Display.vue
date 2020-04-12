<template>
    <div class="display-pad">
        <div class="row">
            <div class="col-12">
                {{ task.firstOperand }}
                {{ task.operation.symbol }}
                <span
                    class="input-wrapper shadow"
                    :class="{active: inputs.active === 'first'}"
                    @click="$emit('activate', 'first')"
                >{{ inputs.first || '__' }}</span>
                {{ task.operation.symbol }}
                <span
                    class="input-wrapper shadow"
                    @click="$emit('activate', 'second')"
                    :class="{active: inputs.active === 'second'}"
                >{{ inputs.second || '__' }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-12">= {{ task.expectedResult }}</div>
        </div>
    </div>
</template>

<script>
/**
 * @type {import('vue').Component}
 */
const Display = {
    name: 'Display',
    props: ['task', 'inputs']
};

export default Display;
</script>

<style lang="scss" scoped>
.display-pad {
    padding: 3rem 5rem;
    font-size: 2rem;
    color: rgb(141, 123, 123);
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        left: 15px;
        right: 15px;
        top: 15px;
        bottom: 15px;
        z-index: -1;
    }

    &.hidden::after {
        z-index: 1;
        filter: blur(8px);
        background-color: #eeeeee;
    }

    .input-wrapper {
        display: inline-block;
        text-align: center;
        width: 4rem;

        &.active {
            transform: scale(1.1);
        }
    }
}
</style>