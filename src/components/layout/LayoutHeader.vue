<template>
	<ElRow class="sm:px-[20px] px-0">
		<ElCol :span="12">
			<div class="flex-center justify-start cursor-pointer" @click="router.push('/')">
                <div
                    class="mr-[6px] flex-center justify-start"
                >
                    <ElIcon class="h-3 w-3" color="#606666">
                        <Orange />
                    </ElIcon>
                </div>
                <ElText class="my-0 text-color-regular">Tommy Huang</ElText>
			</div>
		</ElCol>
		<ElCol :span="12">
			<div class="flex-center justify-end">
                <ElText class="my-0 text-color-regular">Based in Hsinchu-TW</ElText>
                <ElButton
                    v-if="!layoutStore.isMobile"
                    :icon="SuccessFilled"
                    @click="logout()"
                    class="!text-color-[#e33] ml-[24px]"
                    round
                >
                    <p class="!text-color-[#e33]">Available for Freelance</p>
                </ElButton>
			</div>
		</ElCol>
	</ElRow>
</template>

<script setup lang="ts">
import { SuccessFilled, Orange } from '@element-plus/icons-vue'
import { useLayoutStore } from '@/store/modules/layout'
import { useAuthStore } from '@/store/modules/auth'

const router = useRouter()
const layoutStore = useLayoutStore()
const authStore = useAuthStore()

const logout = () => {
	authStore.logout()
	router.push('/auth/login')
}

const onResize = () => {
	layoutStore.windowResize({
		width: window.innerWidth,
		height: window.innerHeight,
	})
}

onMounted(() => {
	window.addEventListener('resize', onResize)
	onResize()
})
</script>

<style scoped lang="stylus">
.el-row
    height 100%
    align-items center

</style>
