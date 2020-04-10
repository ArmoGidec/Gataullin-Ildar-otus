<template>
    <div class="keypad">
        <div class="keypad__numbers">
            <div class="keypad__item">1</div>
            <div class="keypad__item">2</div>
            <div class="keypad__item">3</div>
            <div class="keypad__item">4</div>
            <div class="keypad__item">5</div>
            <div class="keypad__item">6</div>
            <div class="keypad__item">7</div>
            <div class="keypad__item">8</div>
            <div class="keypad__item">9</div>
            <div class="keypad__item">0</div>
        </div>
        <div class="keypad__helpers">
            <div class="keypad__item">&lt;</div>
            <div class="keypad__item">&gt;</div>
            <div class="keypad__item">?</div>
            <div class="keypad__item">=</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Keypad',
};
</script>

<style lang="scss" scoped>
.keypad {
    display: flex;

    &__numbers, &__helpers {
        flex: 1;
        display: grid;
        gap: 1.5rem;
    }

    &__numbers {
        flex-basis: 40%;
        grid-template-columns: repeat(3, 1fr);
    }

    &__item {
        border-radius: 50%;
        width: 2.8rem;
        height: 2.8rem;
        line-height: 2.7rem;
        text-align: center;
        margin: 0 auto;
        
        font-weight: bold;
        font-size: 1.2rem;

        box-shadow: 0 .6rem 1rem rgba(0,0,0,.4);
    }

    &__numbers &__item {
        background-color: rgb(206, 126, 61);

        &:last-child {
            grid-column-start: 2;
        }
    }
}
</style>