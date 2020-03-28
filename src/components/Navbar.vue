<template>
    <!-- <div id="nav">
      <router-link to="/">ToDo</router-link> |
      <router-link to="/blockchain">Blockchain</router-link>
    </div> -->
    <nav class="navbar navbar-expand navbar-dark bg-primary">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse navbar-toggable-sm" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
                <!-- <li class="nav-item active">
                    <router-link class="nav-link" active-class="lol" exact-active-class="active" to="/">ToDo</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" active-class="lol" exact-active-class="active" to="/blockchain">Blockchain</router-link>
                </li> -->
                <router-link
                    to="/"
                    v-slot="{ href, route, navigate, isActive, isExactActive }"
                >
                    <li
                        :class="[isActive && 'router-link-active', isExactActive && 'active', 'nav-item']"
                    >
                        <a :href="href" class="nav-link" @click="navigate">{{ route.name }}</a>
                    </li>
                </router-link>
                <router-link
                    to="/blockchain"
                    v-slot="{ href, route, navigate, isActive, isExactActive }"
                >
                    <li
                        :class="[isActive && 'router-link-active', isExactActive && 'active', 'nav-item']"
                    >
                        <a :href="href" class="nav-link" @click="navigate">{{ route.name }}</a>
                    </li>
                </router-link>
            </ul>
            
        </div>
    </nav>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>
<style>

</style>