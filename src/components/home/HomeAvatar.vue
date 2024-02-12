<!-- eslint-disable max-len -->
<template>
    <ElRow class="flex-center sm:pt-[120px] sm:pb-[56px] sm:px-[40px] py-[20px] px-[16px]">
        <ElCol :span="avatarCol1">
            <ElImage
                class="w-[190px] h-[190px]"
                src="https://media.licdn.com/dms/image/D5603AQEF0qv0cQhlmA/profile-displayphoto-shrink_400_400/0/1695393609065?e=1713398400&v=beta&t=yYQ7bEKJUSkqLlZHvyZOtr_LrdU36grP2LpSzqyC5Dk"
                fit="cover"
            />
        </ElCol>

        <ElCol :span="avatarCol2">
            <ElText class="text-8xl">
                Software
            </ElText>
            <br>
            <ElText class="text-8xl">
                Developer
            </ElText>
        </ElCol>
    </ElRow>
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
</style>
