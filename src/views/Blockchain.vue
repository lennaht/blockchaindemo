<template>
  <div class="about">
    <button @click="test">lol</button>
    <button @click="validate">validate</button>
    <button @click="log">log</button>
  </div>
</template>

<script>
export default {
    name: 'Blockchain',
    methods: {
        async test() {
            this.$chain.addPendingAction('CREATE', null, Date.now(), 'lol');
            console.log(this.$chain);
            await this.$chain.minePendingActions();
        },
        async validate() {
            const valid = await this.$chain.validateChain();
            console.log(valid);
        },
        log() {
            console.log(this.$chain);
        }
    }
}
</script>
