<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { Post } from '@/interfaces/Post';
import {useCounterStore} from '@/store/counter';
const counter = useCounterStore();
const count = ref(counter.count);

const name = ref({id: 1, lastname: 'Asia'});
const firstname = ref('');
const lastname = ref('');
const email = ref('');
const password = ref('');
const gender = ref('');
const agree = ref(false);
function formSubmit() {
    console.log("Name:", name.value.lastname);
    // console.log("Name:", firstname.value, " ", lastname.value);
    // console.log("Grender:", gender.value);
    // console.log("agree:", agree.value);
}

const post = reactive<Post>({
    title: "",
    details: '',
    // isActive: false,
    agree: false
});
const error = reactive({
    title: '',
    details: '',
    agree: ''
});
function formSubmit2(){ 
    // const titleRegex = /^[a-zA-Z0-9 .-]{1,}$/;
    const titleRegex = /^[a-zA-Z0-9 .-]+$/;
    if(post.title === '') {
        error.title = 'Title is required';
    }else if(post.title.length < 2 || post.title.length > 20) {
        error.title = 'Title must be between 2 and 20 characters';
    }else if(!titleRegex.test(post.title)) {
        error.title = 'Title must be alphanumeric, space . or -';
    }else{
        error.title = '';
    }
    if(post.details === '') {
        error.details = 'Details is required';
    }else{
        error.details = '';
    }
    if(post.agree === false) {
        error.agree = 'You must agree to terms and conditions';
    }else{
        error.agree = '';
    }

    if(error.title !== '' || error.details !== '' || error.agree !== ''){
        return;
    }
    console.log("Title:", post.title);
    console.log("Details:", post.details);
    // console.log("isActive:", post.isActive);
    alert("Submitted");
}
function updateState() {
    counter.count = count.value;
    counter.setLocal();
}
</script>

<template>
    <div class="col-lg-6 mb-4">
        <input type="number" class="form-control mb-2" v-model="count">
        <input @click="updateState" type="button" class="btn btn-success" value="Update Count Value">
    </div>
    <div class="row gy-4">
        <div class="col-md-6">
            <h3>Form 1 (ref)</h3>
            <form @submit.prevent="formSubmit">
                <div class="mb-3">
                    <label for="exampleInputName" class="form-label">Name</label>
                    <input type="text" class="form-control" v-model="name.lastname">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" v-model="email" id="exampleInputEmail1"
                        aria-describedby="emailHelp">
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
        </div>
        <div class="col-md-6">
            <h3>Form 2 (reactive)</h3>
            <form @submit.prevent="formSubmit2">
                <div class="mb-3">
                    <label for="exampleInputName" class="form-label">Title</label>
                    <input type="text" class="form-control" v-model="post.title">
                    <span class="text-danger">{{ error.title }}</span>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Details</label>
                    <textarea v-model="post.details" class="form-control"></textarea>
                    <span class="text-danger">{{ error.details }}</span>
                </div>
                <!-- <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="isActive" v-model="post.isActive">
                    <label class="form-check-label" for="isActive">Active</label>
                </div> -->
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="postAgree" v-model="post.agree">
                    <label class="form-check-label" for="postAgree">I agree to terms and conditions of the site</label><br>
                    <span class="text-danger">{{ error.agree }}</span>
                </div>
                <button type="submit" class="btn btn-primary">Submit Form 2</button>
            </form>
        </div>
    </div>

</template>

<style scoped></style>