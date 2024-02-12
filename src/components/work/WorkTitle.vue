<!-- eslint-disable max-len -->
<template>
    <ElRow class="sm:py-[70px] sm:px-[40px] py-[20px] px-[16px]">
        <ElCol :span="12">
            <div class="mb-[40px]">
                <ElText size="small" tag="b">
                    Award
                </ElText>
            </div>
            <ElText size="large" tag="p" class="text-word-break ani-block-container">
                <span class="ani-block">
                    • Interdisciplinary Excellence Award - Bio@Taipei 2022
                </span>
            </ElText>
            <ElImage
                class="w-[400px] h-[250px] mt-[12px]"
                src="https://media.licdn.com/dms/image/C562DAQHvb-3eu91jSg/profile-treasury-image-shrink_800_800/0/1661516014172?e=1708333200&v=beta&t=Fnl5ihY6QS7_wAA9EnGsdkA7XqorVqdWhvXI5VsiwKQ"
            />
        </ElCol>

        <ElCol :span="12">
            <div class="mb-[40px]">
                <ElText size="small" tag="b">
                    Publication
                </ElText>
            </div>
            <ElText size="large" tag="p" class="text-word-break ani-block-container">
                <span class="ani-block">
                    • Cloud-based Digital Microfluidics Ecosystem - 2023 SLAS
                </span>
            </ElText>
            <ElText size="large" tag="p" class="mt-[12px] text-word-break ani-block-container">
                <span class="ani-block">
                    • A Flexible MQTT Solution for TypeScript Projects - NPM
                </span>
            </ElText>
            <ElText size="large" tag="p" class="mt-[12px] text-word-break ani-block-container">
                <span class="ani-block">
                    • Non-Regular Electrode Routing with Optimal Pin Selection for Electrowetting-on-Dielectric Chips - 2022 ASP-DAC
                </span>
            </ElText>
            <ElText size="large" tag="p" class="mt-[12px] text-word-break ani-block-container">
                <span class="ani-block">
                    • An Open-Source Microfluidic Design Ecosystem - 2020 FUTEX
                </span>
            </ElText>
        </ElCol>
    </ElRow>
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
