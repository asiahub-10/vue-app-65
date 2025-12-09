<script setup lang="ts">
    import { ref } from 'vue';
    import {useUserStore} from '@/store/user';
    const userStore = useUserStore();

    interface User {
        id: number;
        name: string;
    }
    const user = ref<User>(userStore.user);
    // console.log(typeof userStore.user);

    function handleSubmit(){
        console.log(user.value);
        userStore.user = user.value;
        userStore.setLocal();
    }

</script>

<template>
   <h2>Form 2</h2>
   <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label for="">ID</label>
            <input type="number" class="form-control" v-model="user.id">
        </div>
        <div class="mb-3">
            <label for="">Name</label>
            <input type="text" class="form-control" v-model="user.name">
        </div>
        <div class="mb-3">
            <input type="submit" class="btn btn-success" value="Update Value">
        </div>
   </form>
</template>

<style scoped></style>