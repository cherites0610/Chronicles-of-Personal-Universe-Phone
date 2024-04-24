<template>
    <div class="absolute top-4 left-4 drawer z-10">
        <input id="my-drawer" type="checkbox" class="drawer-toggle"/>
        <div class="drawer-content">
            <label for="my-drawer" class="btn btn-primary drawer-button">導航欄</label>
        </div>
        <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <li @click="handleRouter" v-for="(item, index) in router">
                    <RouterLink :to="item.path">{{ item.name }}</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const handleRouter = () => {
    document.getElementsByClassName('drawer-toggle')[0].checked=false
}

const router = [
    {
        name: '首頁',
        path: '/',
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