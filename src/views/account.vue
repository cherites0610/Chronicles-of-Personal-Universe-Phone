<template>
    <div class="flex flex-wrap justify-center content-center mt-24 gap-10 w-full">

        <div class="avatar">
            <div class="w-24 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>

        <div class="felx flex-wrap justify-center content-center h-56 w-80 card-bordered card">
            <p class=" w-20 text-center card-title">賬戶資料</p>
            <div class=" card-body p-5">
                <div>賬號:{{ user.account }}</div>
                <div>暱稱:{{ user.name }}</div>
                <div>郵箱:{{ user.email }}</div>
                <div>密碼:{{ user.password }}</div>
            </div>
        </div>
    </div>

</template>

<script setup>
const user = ref({
    account: '未讀取',
    name: '未讀取',
    email: '未讀取',
    password: '未讀取'
})
</script>

<style scoped></style>