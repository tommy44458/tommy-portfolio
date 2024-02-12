<!-- eslint-disable max-len -->
<template>
    <div class="work-container" @click="router.push('/console/page2')">
        <div
            class="flex flex-center w-[100%]"
            :class="{
                'justify-end': props.justifyEnd
            }"
        >
            <div class="w-[98%] overflow-hidden">
                <ElImage
                    class="work-img"
                    :src="props.imageUrl"
                />
            </div>
        </div>
        <div
            class="flex flex-center w-[100%] mt-[20px]"
            :class="{
                'justify-end': props.justifyEnd
            }"
        >
            <ElRow class="w-[98%]">
                <ElCol :span="12">
                    <ElText size="large">
                        {{ props.name }}
                    </ElText>
                </ElCol>
                <ElCol :span="12" class="overflow-hidden">
                    <div class="flex-container">
                        <div class="year">
                            <ElText size="large" class="text-color-secondary">
                                2023
                            </ElText>
                        </div>
                        <div class="details">
                            <ElIcon class="text-color-regular">
                                <Right />
                            </ElIcon>
                        </div>
                    </div>
                </ElCol>
            </ElRow>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Right } from '@element-plus/icons-vue'

const router = useRouter()

const props = defineProps({
	imageUrl: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	year: {
		type: String,
		required: true,
	},
	justifyEnd: {
		type: Boolean,
		required: false,
		default: false,
	},
})

onUnmounted(() => {
	// a
})

onMounted(() => {
	// window.addEventListener('resize', onResize)
	// onResize()
})
</script>

<style scoped lang="stylus">
.work-container:hover
    .work-img
        transform: scale(1.1) /* 滑鼠懸停時放大圖片10% */

.text-word-break
    word-break keep-all

.work-img
    display: block /* 移除圖片底部的空隙 */
    width: 100% /* 可以根據需要調整 */
    height: auto /* 保持圖片的原始寬高比 */
    transition: transform 0.5s ease /* 平滑過渡效果 */
    transform-origin: center /* 確保縮放以圖片中心為基點 */

// .work-img:hover
//     transform: scale(1.1) /* 滑鼠懸停時放大圖片10% */

.flex-container
    display: flex /* 使用 Flexbox 布局 */
    justify-content: flex-end /* 内容靠右对齐 */
    cursor: pointer
    overflow: hidden /* 防止溢出内容显示 */

.year
    transition: transform 0.5s ease /* 平滑过渡效果 */
    transform: translateX(15px)

.details
    transition: transform 0.5s ease /* 平滑过渡效果 */
    transform: translateX(30px)

.placeholder
    width: 0 /* 初始占位符宽度为 0 */
    transition: width 0.5s ease /* 平滑过渡效果 */
    transform: translateX(0)

.work-container:hover .year
    transform: translateX(-5px) /* 悬停时左移 "2023" */

.work-container:hover .details
    transform: translateX(0px) /* 悬停时左移 "(12344)" */

.work-container:hover .placeholder
    width: 5px /* 悬停时增加占位符宽度 */

</style>
