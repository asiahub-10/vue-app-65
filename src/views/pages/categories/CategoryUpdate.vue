<script setup lang="ts">
import axios from 'axios';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { defaultCategory, type Category } from '@/interfaces/Category';

const route = useRoute();
const id = route.params.id;
let item = ref<Category>(defaultCategory);

axios.get(`http://127.0.0.1:8000/api/categories/${id}`)
.then(response => {
    // console.log(response.data);
    item.value = response.data.category;
    // item.value.is_inactive = !item.value.is_inactive;
})
.catch(error => {
    console.log(error);
})

function handleSubmit(){
    // console.log(item.value.name);
    // console.log(item.value.is_inactive);
    // axios.put(`http://127.0.0.1:8000/api/categories/${id}`, item.value)
    // .then(response => {
    //     console.log(response.data);
    // })
    // .catch(error => {
    //     console.log(error);
    // })
    let formData = new FormData();
    formData.append('name', item.value.name);
    formData.append('is_inactive', item.value.is_inactive.toString());

    axios.put(`http://127.0.0.1:8000/api/categories/${id}`, formData)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
        console.log(error.status);
        if(error.status === 400) {
            alert(error.response.data.message);
        }
    })
}

</script>

<template>
    <router-link to="/categories" class="btn btn-outline-dark">← Back</router-link>
    <h3>Update Category</h3>
    <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label for="">Name</label>
            <input type="text" class="form-control" v-model="item.name">            
        </div>
        <div class="mb-3">
            <div class="form-check">
                <!-- <input class="form-check-input" type="checkbox"  id="chkActive" v-model="item.is_inactive" v-bind:checked="item.is_inactive"> -->
                <input class="form-check-input" type="checkbox"  id="chkActive" v-model="item.is_inactive" :true-value="0" :false-value="1">
                <label class="form-check-label" for="chkActive">
                    Active
                </label>
            </div>
        </div>
        <div class="mb-3">
            <button class="btn btn-success">Update</button>
        </div>
    </form>
</template>

<style scoped>

</style>