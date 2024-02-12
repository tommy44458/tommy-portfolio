<!-- eslint-disable max-len -->
<template>
    <ElRow class="sm:py-[70px] sm:px-[40px] py-[20px] px-[16px]">
        <ElCol :span="12">
            <div class="mb-[40px]">
                <ElText size="small" tag="b">
                    Experience
                </ElText>
            </div>
            <ElTimeline class="px-0">
                <ElTimelineItem timestamp="2023/05/01 - Present">
                    <ElText size="large" class="ani-block-container">
                        <span class="ani-block">Parther - BioPro Scientific</span>
                    </ElText>
                </ElTimelineItem>
                <ElTimelineItem timestamp="2022/05/01 - 2023/04/31">
                    <ElText size="large" class="ani-block-container">
                        <span class="ani-block">Software Lead - BioPro Scientific</span>
                    </ElText>
                </ElTimelineItem>
                <ElTimelineItem timestamp="2020/01/01 - 2020/10/31">
                    <ElText size="large" class="ani-block-container">
                        <span class="ani-block">Researcher, Neuroscience - NTHU</span>
                    </ElText>
                </ElTimelineItem>
                <ElTimelineItem timestamp="2019/11/01 - 2024/01/31">
                    <ElText size="large" class="ani-block-container">
                        <span class="ani-block">Researcher, Digital Microfluidics - UCLA</span>
                    </ElText>
                </ElTimelineItem>
                <ElTimelineItem timestamp="2019/10/01 - 2022/04/31">
                    <ElText size="large" class="ani-block-container">
                        <span class="ani-block">Software Engineer, Full Stack/Data Analysis - BioPro Scientific</span>
                    </ElText>
                </ElTimelineItem>
                <ElTimelineItem timestamp="2017/09/01 - Present">
                    <ElText size="large" class="ani-block-container">
                        <span class="ani-block">Freelancer, Web System</span>
                    </ElText>
                </ElTimelineItem>
            </ElTimeline>
        </ElCol>

        <ElCol :span="12">
            <div class="mb-[40px]">
                <ElText size="small" tag="b">
                    About
                </ElText>
            </div>
            <ElText size="large" tag="p" class="text-word-break ani-block-container">
                <span class="ani-block">
                    I'm an NTHU graduate with a Master's in Computer Science, specialized in electrowetting chip design automation under Prof. Tsung-Yi Ho. My work bridges computer science with biomedical engineering, focusing on bio-medical chips and algorithms.
                </span>
            </ElText>
            <ElText size="large" tag="p" class="mt-[12px] text-word-break ani-block-container">
                <span class="ani-block">
                    Post-graduation, I collaborated with UCLA's Prof. Chang-Jin Kim to create a cloud-based digital microfluidic chip platform and worked with NTHU's Prof. Hsin Chen on AI bio-medical chips and algorithms for treating neurological disorders.
                </span>
            </ElText>
            <ElText size="large" tag="p" class="mt-[12px] text-word-break ani-block-container">
                <span class="ani-block">
                    My expertise lies in bio-medical chip design automation, neuroscience, and digital microfluidics. I also have experience in modern web and AIoT platform development, merging advanced technology with practical applications.
                </span>
            </ElText>
            <div class="ani-block-container">
                <ElText size="large" tag="p" class="mt-[24px] text-word-break ani-block">
                    • Rich experience in creating efficient and sustainable software systems using functional and object-oriented programming paradigms, as well as clean code principles and design patterns.
                </ElText>
                <ElText size="large" tag="p" class="mt-[4px] text-word-break ani-block">
                    • Strong passion and technical background in system design, web, AIoT, brain science and bio-applications.
                </ElText>
                <ElText size="large" tag="p" class="mt-[4px] text-word-break ani-block">
                    • Good knowledge of the following programming skills:
                    <span>
                        <ElText size="large" tag="b" class="text-word-break ani-block">
                            #Python, #Golang, #NodeJS, #Vue, #Typescript, #RDBMS, #Redis, #MQTT, #Kafka, #K8s, #Git, #CICD, #AWS, #RaspberryPi.
                        </ElText>
                    </span>
                </ElText>
            </div>
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
