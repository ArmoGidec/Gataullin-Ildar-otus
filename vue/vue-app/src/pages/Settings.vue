<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h1>Привет</h1>
            </div>
        </div>
        <div class="row py-3">
            <div class="col-12">
                <p>Добро пожаловать на {{ day }} тренировачный день.</p>
                <p>Ваш последний результат - решено {{ last.solved }} из {{ last.of }}</p>
                <p>Общая точность {{ accurancy }}%</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h3>Настройки</h3>
            </div>
            <div class="form-group col-12">
                <label>
                    <input type="range" min="1" max="15" v-model="time" />
                    Длительность {{ time }} минут
                </label>
            </div>
            <div class="form-group col-12">
                <label>
                    <input type="range" min="1" max="10" v-model="level" />
                    Сложность {{ level }}
                </label>
            </div>
            <div class="form-group col-12">
                <label>
                    <input type="checkbox" value="sum" v-model="types" />
                    Суммирование
                </label>
                <label>
                    <input type="checkbox" value="dif" v-model="types" />
                    Разность
                </label>
                <label>
                    <input type="checkbox" value="mul" v-model="types" />
                    Умножение
                </label>
                <label>
                    <input type="checkbox" value="div" v-model="types" />
                    Деление
                </label>
                <label>
                    <input type="checkbox" value="pow" v-model="types" />
                    Возведение в степень
                </label>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-right">
                <button class="btn btn-light shadow px-3">Play</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from '@vue/composition-api';

export default {
    name: 'SettingsPage',
    setup() {
        const day = ref(24);
        const lastResult = ref('10/25');
        const all = ref('80/100');
        const time = ref(7);
        const level = ref(5);
        const types = ref(['sum', 'div', 'pow']);

        const last = computed(() => {
            const [solved, of] = lastResult.value.split('/');
            return { solved, of };
        });

        const accurancy = computed(() => {
            const [solved, of] = all.value.split('/');
            return Math.floor(solved / of * 100);
        });

        return {
            day, time, level, types, last, accurancy
        }
    }
};
</script>

<style lang="scss" scoped>
.form-group {
    &,
    label {
        display: flex;
        flex-direction: column;
    }

    label {
        align-items: baseline;
    }
}
</style>