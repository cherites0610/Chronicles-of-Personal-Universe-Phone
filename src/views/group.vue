<template>
    <div class="mt-10 flex flex-col gap-3 w-full p-4">
        <div v-for="index in Math.ceil(groups.length / 2)" class="flex gap-3 flex-row">
            <div @click="handldClickCard(groups[(index - 1) * 2])" class="card basis-1/2  shadow-xl">
                <cardBody :group="groups[(index - 1) * 2]" />
            </div>
            <div @click="handldClickCard(groups[index * 2 - 1])" v-if="cardIsShow(index)"
                class="card basis-1/2  shadow-xl">
                <cardBody :group="groups[index * 2 - 1]" />
            </div>
        </div>
    </div>

    <dialog id="my_modal_1" class="modal">
        <div class="modal-box w-64">
            <div class="flex justify-between">
                <h3 class="font-bold text-xl flex-auto ">{{ selectGroup.name}}!</h3>
                <form method="dialog">
                     <button class="btn btn-square btn-xs  btn-circle btn-ghost">
                        <ph-x :size="24" />
                    </button>
                </form>               
            </div>
            
            <p class="py-3 ">成員:</p>
            <div class="place-content-end">
                <p v-for="item in selectGroup.members" class="pl-5 py-0.5 text-sm"> {{ item }}</p>
                
            </div>
            
            <div class="modal-action">
               
                    <div >
                        <button class=" btn btn-secondary btn-sm">
                            
                            退出
                        </button>
                    </div>
                    
                    <!-- if there is a button in form, it will close the modal -->
                    
                
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