<template>
    <div class=" flex flex-col gap-3 w-full p-4">
        <div class="flex gap-3 flex-row">
            <div class="card basis-1/2 h-80 bg-red-200 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">重要且緊急</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div class="card basis-1/2 h-80 bg-emerald-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">重要但不緊急</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
        </div>

        <div class="flex gap-3 flex-row">
            <div class="card basis-1/2 h-80 bg-cyan-200 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">不重要但緊急</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div class="card basis-1/2 h-80 bg-stone-200 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">不重要且不緊急</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 5px;
}
</style>