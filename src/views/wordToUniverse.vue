<template>
    <div class="content-center flex flex-col flex-wrap mt-14 p-4">
        <div @click="handleClickWTU(item)" v-for="item in comments" class="border-neutral-500 mb-5 card bg-base-100 border">
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
import { Result, comment } from 'postcss';
import { getWordToUById } from '../api/getWordToUByIdApi';
import '../mock/index'
const comments = ref([]);

const handleClickWTU = (item) => {
    document.getElementById('WTUmodal').showModal();
    selectList.value = item
}

const selectList = ref({
    year: '未讀取',
    comment: '未讀取',
})

//為怎麼要用onMounted自己品
//品出來跟我說為啥（tip:生命週期
onMounted(async () => {
    let result = await getWordToUById('1') //因為是返回一個promise，所以可以直接await接收then
    comments.value = result.data
})



// getWordToUById('1').then((result)=>{ //將1作為參數傳遞，返回一個promise，執行then( )
//     comments.value = result.data //result.data 變成comments.value
//     console.log(result.data)
//     spinning.value = false; //處理完畢所以關掉
// }).catch((err) => {console.log(err)})
</script>

<style scoped></style>