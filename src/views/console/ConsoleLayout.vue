<template>
	<main class="overflow-hidden hide-scrollbar">
		<ElContainer>
			<ElHeader>
				<LayoutHeader />
			</ElHeader>
			<ElContainer>
				<ElContainer v-loading="layoutStore.isRouteChanging">
					<ElMain
						class="!p-0 !bg-white"
					>
						<RouterView />
                        <LayoutFooter />
					</ElMain>
				</ElContainer>
			</ElContainer>
		</ElContainer>
	</main>
</template>

<script setup lang="ts">
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import { useLayoutStore } from '@/store/modules/layout'

const layoutStore = useLayoutStore()
</script>

<style scoped lang="stylus">
.el-header
    height 84px
    background-color #fff
    z-index 2
    padding 0

.el-aside
    border-right 1px solid #E3ECED
    width unset !important

</style>
