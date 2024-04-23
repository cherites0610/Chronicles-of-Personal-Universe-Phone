<template>
    <div class=" flex flex-col gap-3 w-full p-4">
        <div v-for="index in Math.ceil(groups.length / 2)" class="flex gap-3 flex-row">
            <div class="card basis-1/2 h-80 bg-cyan-200 shadow-xl">
                <cardBody :group="groups[(index - 1) * 2]" />
            </div>
            <div v-if="isShow(index)" class="card basis-1/2 h-80 bg-stone-200 shadow-xl">
                <cardBody :group="groups[index * 2 - 1]" />
            </div>
        </div>
    </div>
</template>

<script setup>
import cardBody from '@/components/group/cardBody.vue';

const isShow = (index) => {
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