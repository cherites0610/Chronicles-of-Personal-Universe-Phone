<template>
    <div class="mt-14 flex flex-col gap-3 w-full p-4">
        <div v-for="index in Math.ceil(groups.length / 2)" class="flex gap-3 flex-row">
            <div @click="handldClickCard(groups[(index - 1) * 2])" class="card basis-1/2 bg-cyan-200 shadow-xl">
                <cardBody :group="groups[(index - 1) * 2]" />
            </div>
            <div @click="handldClickCard(groups[index * 2 - 1])" v-if="cardIsShow(index)"
                class="card basis-1/2 bg-stone-200 shadow-xl">
                <cardBody :group="groups[index * 2 - 1]" />
            </div>
        </div>
    </div>

    <dialog id="my_modal_1" class="modal">
        <div class="modal-box w-64">
            <h3 class="font-bold text-lg">{{ selectGroup.name}}!</h3>
            <p class="py-4">成員:</p>
            <p v-for="item in selectGroup.members">{{ item }}</p>
            <div class="modal-action">
                <form method="dialog">
                    <button class="mr-2 btn btn-error">退出</button>
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">關閉</button>
                </form>
            </div>
        </div>
    </dialog>
</template>

<script setup>
import cardBody from '@/components/group/cardBody.vue';

const selectGroup = ref({
    name: '未讀取',
    members: []
})

const handldClickCard = (item) => {
    selectGroup.value = item
    document.getElementById('my_modal_1').showModal();
}

const cardIsShow = (index) => {
    if (groups.length % 2 == 0) {
        return true
    } else if (Math.ceil(index * 2) > groups.length) {
        return false
    } else {
        return true;
    }
}

const groups = [
    {
        name: '第一組',
        members: ['羽毛', '47', '猴子']
    },
    {
        name: '第二組',
        members: ['子芸', '寶利發', '管樂大師']
    },
    {
        name: '第三組',
        members: ['123', '456', '789']
    },
    {
        name: '第四組',
        members: ['123', '456', '789']
    },
    {
        name: '第五組',
        members: ['123', '456', '789']
    },
    {
        name: '第六組',
        members: ['123', '456', '789']
    }
]
</script>

<style scoped></style>