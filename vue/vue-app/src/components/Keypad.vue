<template>
    <div class="keypad">
        <div class="keypad__numbers">
            <button
                class="btn rounded-circle keypad__item keypad__item--left"
                title="Левое поле"
                @click="$emit('navigate', 'left')"
            >&lt;</button>
            <button
                class="btn rounded-circle keypad__item keypad__item--right"
                title="Правое поле"
                @click="$emit('navigate', 'right')"
            >&gt;</button>
            <button
                class="btn rounded-circle keypad__item"
                v-for="number of numbersArr"
                :key="number"
                @click="$emit('keyClick', number)"
            >{{ number}}</button>
        </div>
    </div>
</template>

<script>
const numbersArr = Array.from(Array(10)).map((_, i) => (i + 1) % 10);

/**
 * @type {import('vue').Component}
 */
const Keypad = {
    name: 'Keypad',
    setup() {
        return { numbersArr };
    }
};

export default Keypad;
</script>

<style lang="scss" scoped>
.keypad {
    display: flex;
    justify-content: center;

    &__numbers {
        display: grid;
        gap: 1.5rem 2.5rem;
        grid-template-columns: repeat(3, 1fr);
    }

    &__item {
        width: 2.8rem;
        height: 2.8rem;
        margin: 0 auto;

        font-weight: bold;
        font-size: 1.2rem;

        box-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 0.4);
        background-color: rgb(206, 126, 61);

        &:hover {
            background-color: rgb(138, 96, 61);
        }

        &:active {
            background-color: rgb(104, 81, 63);
        }

        &--left,
        &--right {
            background-color: rgb(90, 119, 128);

            &:hover {
                background-color: rgb(110, 148, 160);
            }

            &:active {
                background-color: rgb(61, 81, 87);
            }
        }

        &--left {
            order: 1;
        }

        &:last-child {
            order: 2;
        }

        &--right {
            order: 3;
        }
    }
}
</style>