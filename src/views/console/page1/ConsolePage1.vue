<!-- eslint-disable max-len -->
<template>
    <ElRow class="flex-center sm:pt-[120px] sm:pb-[56px] sm:px-[40px] py-[20px] px-[16px]">
        <ElCol :span="avatarCol1">
            <ElImage
                class="w-[180px] h-[180px]"
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
    <div class="sm:px-[40px] px-[16px]">
        <ElDivider border-style="dashed" class="!my-0"/>
    </div>
    <ElRow class="sm:py-[60px] sm:px-[40px] py-[20px] px-[16px]">
        <ElCol :span="12">
            <ElText size="small" tag="b">
                Experience
            </ElText>
            <ElTimeline class="mt-[24px] px-0">
                <ElTimelineItem timestamp="2018/4/12">
                    <ElText size="large">
                        Experience 3
                    </ElText>
                </ElTimelineItem>
                <ElTimelineItem timestamp="2018/4/3">
                    <ElText size="large">
                        Experience 2
                    </ElText>
                </ElTimelineItem>
                <ElTimelineItem timestamp="2018/4/2">
                    <ElText size="large">
                        Experience 1
                    </ElText>
                </ElTimelineItem>
            </ElTimeline>
        </ElCol>

        <ElCol :span="12">
            <ElText size="small" tag="b">
                About
            </ElText>
            <ElText size="large" tag="p" class="mt-[24px] text-word-break">
                I'm an NTHU graduate with a Master's in Computer Science, specialized in electrowetting chip design automation under Prof. Tsung-Yi Ho. My work bridges computer science with biomedical engineering, focusing on bio-medical chips and algorithms.
            </ElText>
            <ElText size="large" tag="p" class="mt-[12px] text-word-break">
                Post-graduation, I collaborated with UCLA's Prof. Chang-Jin Kim to create a cloud-based digital microfluidic chip platform and worked with NTHU's Prof. Hsin Chen on AI bio-medical chips and algorithms for treating neurological disorders.
            </ElText>
            <ElText size="large" tag="p" class="mt-[12px] text-word-break">
                My expertise lies in bio-medical chip design automation, neuroscience, and digital microfluidics. I also have experience in modern web and AIoT platform development, merging advanced technology with practical applications.
            </ElText>
            <ElText size="large" tag="p" class="mt-[24px] text-word-break">
                • Rich experience in creating efficient and sustainable software systems using functional and object-oriented programming paradigms, as well as clean code principles and design patterns.
            </ElText>
            <ElText size="large" tag="p" class="mt-[4px] text-word-break">
                • Strong passion and technical background in system design, web, AIoT, brain science and bio-applications.
            </ElText>
            <ElText size="large" tag="p" class="mt-[4px] text-word-break">
                • Good knowledge of the following programming skills: #Python, #Golang, #NodeJS, #Vue, #Typescript, #RDBMS, #Redis, #MQTT, #Kafka, #K8s, #Git, #CICD, #AWS, #RaspberryPi.
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
.text-word-break
    word-break keep-all

</style>
