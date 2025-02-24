<template>

<h1>Home page </h1>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/ProfilePage">Profile</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/ProfilePage/talha">Talha Profile</router-link>
<router-link to="/ProfilePage/Waleed">Waleed Profile</router-link>
<router-link to="/ProfilePage/ali">Ali Profile</router-link>


</div>
</template>

<script>
export default {
    name: 'HomePageComponent',
}
</script>

<style scoped>
.nav {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
}
</style>