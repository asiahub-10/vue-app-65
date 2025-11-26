<template>
    <h3>User Form</h3>
    <form @submit.prevent="formSubmit">
        <div class="mb-3">
            <label for="exampleInputName" class="form-label">Name</label>
            <input type="text" class="form-control" v-model="name" id="exampleInputName">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label class="form-label me-3">Gender</label>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-model="gender" d="inlineRadio1" value="male">
                <label class="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-model="gender" d="inlineRadio2" value="female">
                <label class="form-check-label" for="inlineRadio2">Female</label>
            </div>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="agree">
            <label class="form-check-label" for="exampleCheck1">I agree</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script setup>
    import { ref } from 'vue';
    // interface User {
    //     name: string,
    //     email: string,
    //     password: string,
    //     gender: string,
    //     agree: boolean
    // }

    const name = ref('');
    const email = ref('');
    const password = ref('');
    const gender = ref('');
    const agree = ref(false);

    function formSubmit() {        
        console.log("Name:",name.value);
        console.log("Grender:",gender.value);
        console.log("agree:", agree.value);
    }
</script>

<style scoped>

</style>