<template>
    <button id="loginAction">Login</button>
</template>

<script>
export default {
    name: 'LoginButton',
    setup() {
        
    },
    mounted() {
        let loadGoogleGIS = document.createElement('script')
        loadGoogleGIS.setAttribute('src', 'https://accounts.google.com/gsi/client')
        loadGoogleGIS.defer = true;
        document.head.appendChild(loadGoogleGIS)
    },
}
</script>
