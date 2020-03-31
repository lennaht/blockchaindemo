<template>
  <div class="about">
    <button @click="test">lol</button>
    <button @click="validate">validate</button>
    <button @click="log">log</button>
  </div>
</template>

<script>
import { chain } from '../main';

export default {
    name: 'Blockchain',
    methods: {
        async test() {
            chain.addPendingAction('CREATE', null, Date.now(), 'lol');
            console.log(chain);
            await chain.minePendingActions();
        },
        async validate() {
            const valid = await chain.validateChain();
            console.log(valid);
        },
        log() {
            console.log(chain);
        }
    }
}
</script>
