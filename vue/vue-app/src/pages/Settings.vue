<template>
    <fragment>
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
                <router-link class="btn btn-light shadow px-3" :to="{name: 'game'}">
                    Play
                </router-link>
            </div>
        </div>
    </fragment>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { MUTATIONS } from '../store/modules/settings/types';

export default {
    name: 'SettingsPage',
    methods: {
        ...mapMutations([
            MUTATIONS.SET_TIME,
            MUTATIONS.SET_LEVEL,
            MUTATIONS.SET_TYPES
        ]),
    },
    computed: {
        ...mapGetters({
            day: 'day',
            accurancy: 'accurancy',
            last: 'last',
            stateTime: 'time',
            stateLevel: 'level',
            stateTypes: 'types'
        }),
        time: {
            get() { return this.stateTime; },
            set(val) { this[MUTATIONS.SET_TIME](val); }
        },
        level: {
            get() { return this.stateLevel; },
            set(val) { this[MUTATIONS.SET_LEVEL](val); }
        },
        types: {
            get() { return this.stateTypes; },
            set(val) { this[MUTATIONS.SET_TYPES](val); }
        }
    },
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