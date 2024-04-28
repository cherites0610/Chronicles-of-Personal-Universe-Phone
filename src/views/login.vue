<template>
  <div class="login">
    <span class="label-text">帳號</span>
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" v-model="form.account" />
    </label>
    <span class="label-text">密碼</span>
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" v-model="form.password" />
    </label>

    <button class="btn btn-outline btn-login" @click="() => say('登入成功')">
      登入
    </button>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  account: "",
  password: "",
});

function say(message) {
  if (form.account === "sunny" && form.password === "1111") {
    alert(message);
  }
}
</script>

<style scoped></style>
