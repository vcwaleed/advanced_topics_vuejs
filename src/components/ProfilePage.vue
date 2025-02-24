<template>
    <div>
        <h1>Profile page</h1>
        <div>
            <h2>Username: {{ name }}</h2>
            <h2>Email: {{ email }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfilePage',
    computed: {
        name() {
            return this.$route.params.name; 
        },
        email() {
           
            const userEmails = {
                talha: 'talhawaleed77@testmail.com',
                waleed: 'waleed@example.com',
                ali: 'ali@example.com',
            };
            return userEmails[this.name.toLowerCase()] || 'Email not found';
        }
    }
}
</script>

<style scoped>
h1 {
    margin: 40px 0 0;
}
h2 {
    margin: 20px 0 0;
}
</style>
