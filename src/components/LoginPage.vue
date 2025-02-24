<template>
    <div>
        <h1>Login page</h1>
        <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
        </div>
</template>

<script>
export default {
    name: 'LoginPage',
}

</script>

<style scoped>
h1 {
    margin: 40px 0 0;
}
form {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 0 auto;
}
input {
    margin-bottom: 10px;
    padding: 5px;
}
button {
    padding: 5px;
    background-color: #42b983;
    color: white;
    border: none;
}
</style>