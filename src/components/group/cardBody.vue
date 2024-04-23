<template>
    <div class="card-body">
        <h2 class="card-title">{{ props.group.name }}</h2>
        <span class="text-lg font-semibold">成員:</span>
        <span v-for="item in props.group.members"> {{ item }}</span>
        <div class="avatar-group -space-x-6 rtl:space-x-reverse">
            <div v-for="index in props.group.members" class="avatar">
                <div class="size-7">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['group'])
</script>

<style lang="scss" scoped></style>