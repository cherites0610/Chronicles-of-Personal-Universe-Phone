<template>
  <div class="mt-10 flex flex-col gap-3 w-full p-4">
    <h3 class="label-text text-center text-xl">Login</h3>

    <span class="label-text items-center p-4 flex h-5"
      ><ph-user :size="32" />

      帳號</span
    >
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" v-model="form.account" />
    </label>

    <span class="label-text items-center p-4 flex h-5"
      ><ph-lock-key :size="32" />密碼</span
    >
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" v-model="form.password" />
    </label>

    <div class="flex justify-center">
      <button
        class="btn btn-primary w-60"
        @click="handleLoginClick('登入成功')"
      >
        登入
      </button>
    </div>

    <div class="flex items-center justify-center gap-4">
      <h1 class="text">還沒有帳號嗎?</h1>
      <button class="btn btn-active btn-link">點此註冊</button>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  account: "",
  password: "",
});

function handleLoginClick(message) {
  if (form.value.account === "sunny" && form.value.password === "06141111") {
    console.info(message);
  } else {
    console.warn("登入失敗");
  }
}
</script>

<style scoped></style>
//我只是想上傳
