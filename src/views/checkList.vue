<template>
    <div id="container" class="mt-10 p-4">
        <div @click="handleClickGroup(item)" v-for="item in groups" class=' mb-3 card card-bordered p-4'>
            <div class="card-title font-bold text-lg">{{ item }}</div>
        </div>
    </div>

    <dialog id="groupModal" class="modal">
        <div class="modal-box w-64">
            <h3 class="font-bold text-lg">{{ selectGroup }}</h3>
            <p>還未製作</p>
            <div class="modal-action">
                <form method="dialog">
                    <button class="mr-2 btn btn-error">修改</button>
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">關閉</button>
                </form>
            </div>
        </div>
    </dialog>
</template>

<script setup>
const groups = ['毛毛毛毛毛', '專研組', '十叄宿營', '十叄資管']

const selectGroup = ref('');

const handleClickGroup = (item) => {
    document.getElementById('groupModal').showModal();
    selectGroup.value = item
}
</script>

<style scoped></style>