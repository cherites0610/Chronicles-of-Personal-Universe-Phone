<template>
  <div class="mt-10 flex flex-col gap-3 w-full p-4">
    <img
      src="/public/universeLogo.png"
      alt="Description"
      class="w-24 h-24 mx-auto"
    />
    <h3 class="label-text text-center text-xl">Sign Up</h3>

    <span class="label-text items-center p-4 flex h-5"
      ><ph-user :size="32" />

      帳號</span
    >
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" v-model="form.account" />
    </label>

    <span class="label-text items-center p-4 flex h-5"
      ><ph-smiley :size="32" />暱稱</span
    >
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" v-model="form.nickname" />
    </label>

    <span class="label-text items-center p-4 flex h-5"
      ><ph-mailbox :size="32" />

      信箱
    </span>
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" v-model="form.email" />
    </label>

    <span class="label-text items-center p-4 flex h-5"
      ><ph-lock-key :size="32" />

      密碼</span
    >
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" v-model="form.password" />
    </label>

    <div class="flex justify-center">
      <button
        class="btn btn-primary w-60"
        @click="handleRegisterClick('註冊成功')"
      >
        註冊
      </button>
    </div>

    <div class="flex items-center justify-center gap-4">
      <h1 class="text">已經有帳號了嗎?</h1>
      <button class="btn btn-active btn-link">點此登入</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  account: "",
  nickname: "",
  email: "",
  password: "",
});

function handleRegisterClick(message) {
  const accountPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
  const emailPattern =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$&*]){2,}.*$/;

  if (!accountPattern.test(form.value.account)) {
    console.info("帳號必須是英文加數字");
    return;
  }
  if (!emailPattern.test(form.value.email)) {
    console.info("無效的信箱格式");
    return;
  }
  if (!passwordPattern.test(form.value.password)) {
    console.info("密碼需要至少一個大寫英文字母和至少兩個特殊字符");
    return;
  }
  console.info(message);
}
</script>
