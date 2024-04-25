<template>
    <div class="content-center flex flex-col flex-wrap mt-14 p-4">
        <div @click="handleClickWTU(item)" v-for="item in list" class="border-neutral-500 mb-5 card bg-base-100 border">
            <div class="p-4 card-body">
                <h2 class="card-title">{{ item.year }}</h2>
                <p class=" h-12 text-ellipsis overflow-hidden ...">{{ item.comment }}</p>
            </div>
        </div>
    </div>

    <dialog id="WTUmodal" class="modal">
        <div class="modal-box w-64">
            <h3 class="font-bold text-lg">{{ selectList.year }}</h3>
            <p>{{ selectList.comment }}</p>
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
const handleClickWTU = (item) => {
    document.getElementById('WTUmodal').showModal();
    selectList.value = item
}

const selectList = ref({
    year: '未讀取',
    comment: '未讀取',
})

const list = [
    {
        year: 2023,
        comment: '我也不知道大哥要說怎麼，但反正我就隨便亂打，你們就隨便亂看'
    },
    {
        year: 2024,
        comment: '感覺如果和2023的一模一樣很沒誠意，所以我決定我在亂打一次，希望你們可以在亂砍一次,感覺如果和2023的一模一樣很沒誠意，所以我決定我在亂打一次，希望你們可以在亂砍一次,感覺如果和2023的一模一樣很沒誠意，所以我決定我在亂打一次，希望你們可以在亂砍一次'
    },
    {
        year: 2025,
        comment: '但反正就是亂打，只要有內容可以測試我就很滿意了'
    }
]
</script>

<style scoped></style>