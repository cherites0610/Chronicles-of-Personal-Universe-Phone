<template>
    <div class="flex content-center flex-wrap w-52 absolute top-4 left-4 drawer z-10">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <label for="my-drawer" class="drawer-button"><ph-list :size="32" /></label>
        </div>

        <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <li @click="handleRouter" v-for="(item, index) in router">
                    <RouterLink @click="selectRouter = item.name" :to="item.path">{{ item.name }}</RouterLink>
                </li>
            </ul>
        </div>

        <p class="text-2xl font-mono font-bold">{{ selectRouter }}</p>
    </div>
</template>

<script setup>
const selectRouter = ref('首頁');

const handleRouter = () => {
    document.getElementsByClassName('drawer-toggle')[0].checked = false
}

const router = [
    {
        name: '首頁',
        path: '/home',
    }, {
        name: '登錄',
        path: '/login',
    },
    {
        name: '註冊',
        path: '/register',
    },
    {
        name: '給宇宙的話',
        path: '/wordToUniverse',
    },
    {
        name: '記事本',
        path: '/diary',
    }, {
        name: '群組',
        path: '/group',
    }, {
        name: '筆記本',
        path: '/checkList',
    }, {
        name: '賬戶',
        path: '/account'
    }

]

</script>

<style lang="scss" scoped></style>