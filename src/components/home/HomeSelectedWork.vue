<!-- eslint-disable max-len -->
<template>
    <div class="sm:py-[70px] sm:px-[40px] py-[20px] px-[16px]">
        <ElRow class="mb-[40px]">
            <ElText size="small" tag="b">
                Selected Work
            </ElText>
        </ElRow>

        <ElRow>
            <ElCol :span="12">
                <SelectedWorkEntrance
                    :image-url="'https://assets-global.website-files.com/650a6ea25855039539701bb9/650bd085684cdcb4197add16_Rectangle%20275.jpg'"
                    :name="'1212'"
                    :year="'2023'"
                    :justify-end="false"
                />
                <br>
                <SelectedWorkEntrance
                    :image-url="'https://assets-global.website-files.com/650a6ea25855039539701bb9/650bd085684cdcb4197add16_Rectangle%20275.jpg'"
                    :name="'1212'"
                    :year="'2023'"
                    :justify-end="false"
                />
            </ElCol>

            <ElCol :span="12" class="">
                <SelectedWorkEntrance
                    :image-url="'https://assets-global.website-files.com/650a6ea25855039539701bb9/650bd085684cdcb4197add16_Rectangle%20275.jpg'"
                    :name="'1212'"
                    :year="'2023'"
                    :justify-end="true"
                />
                <br>
                <SelectedWorkEntrance
                    :image-url="'https://assets-global.website-files.com/650a6ea25855039539701bb9/650bd085684cdcb4197add16_Rectangle%20275.jpg'"
                    :name="'1212'"
                    :year="'2023'"
                    :justify-end="true"
                />
            </ElCol>
        </ElRow>
    </div>
</template>

<script setup lang="ts">

onUnmounted(() => {
	// a
})

onMounted(() => {
	// window.addEventListener('resize', onResize)
	// onResize()
})
</script>

<style scoped lang="stylus">
.text-word-break
    word-break keep-all

</style>
