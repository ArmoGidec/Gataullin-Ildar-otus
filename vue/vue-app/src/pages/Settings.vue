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
                <p
                    v-if="last !== null"
                >Ваш последний результат - решено {{ last!==null && last.correctly }} из {{ last!==null && last.solved }}</p>
                <p v-if="accurancy !==null">Общая точность {{ accurancy }}%</p>
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
                <label v-for="(obj, type) in OPERATION" :key="type">
                    <input type="checkbox" :value="obj" v-model="types" />
                    {{ obj.text }}
                </label>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-right">
                <router-link class="btn btn-light shadow px-3" :to="{name: 'game'}">Играть</router-link>
            </div>
        </div>
    </fragment>
</template>

<script>
import { computed, ref } from '@vue/composition-api';

import useStore from '$src/composition/useStore';
import { MUTATIONS } from '$src/store/modules/settings/types';
import { OPERATION } from '$src/utils/types';

/**
 * @type {import('vue').Component}
 */
const Settings = {
    name: 'SettingsPage',
    setup() {
        const { getters, commit } = useStore();

        const day = getters.day;
        const accurancy = ref(getters.accurancy);
        const last = ref(getters.last);

        const time = computed({
            get: () => getters.time,
            set: val => commit(MUTATIONS.SET_TIME, val)
        });

        const level = computed({
            get: () => getters.level,
            set: val => commit(MUTATIONS.SET_LEVEL, val)
        });

        const types = computed({
            get: () => getters.types,
            set: val => commit(MUTATIONS.SET_TYPES, val)
        });

        return { day, accurancy, last, time, level, types, OPERATION };
    }
};

export default Settings;
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