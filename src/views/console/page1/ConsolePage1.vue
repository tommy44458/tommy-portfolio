<!-- eslint-disable max-len -->
<template>
    <HomeAvatar />
    <div class="sm:px-[40px] px-[16px]">
        <ElDivider border-style="dashed" class="!my-0"/>
    </div>
    <HomeExperience />
    <div class="sm:px-[40px] px-[16px]">
        <ElDivider border-style="dashed" class="!my-0"/>
    </div>
    <HomeAchievement />
    <div class="sm:px-[40px] px-[16px]">
        <ElDivider border-style="dashed" class="!my-0"/>
    </div>
    <HomeSelectedWork />
</template>

<script setup lang="ts">
// import { useLayoutStore } from '@/store/modules/layout'

// const layoutStore = useLayoutStore()

const avatarCol1 = ref(12)
const avatarCol2 = ref(12)

onUnmounted(() => {
	// a
})

const onResize = () => {
	if (window.innerWidth < 768) {
		avatarCol1.value = 24
		avatarCol2.value = 24
	} else {
		avatarCol1.value = 12
		avatarCol2.value = 12
	}
}

onMounted(() => {
	window.addEventListener('resize', onResize)
	onResize()
})
</script>

<style scoped lang="stylus">
.text-word-break
    word-break keep-all

</style>
