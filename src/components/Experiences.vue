<template>
    <section>
            <h2 class="text-lg md:text-xl uppercase font-black text-orange-500 tracking-wider mt-2 mb-2">Experience</h2>
            <article v-for="experience in experiences" :key="experience" class="mb-8 md:mb-4">
                <h3 class="flex flex-col md:flex-row pb-1">
                    <span class="font-bold text-gray-900 pr-1">{{ experience.title }}</span>
                    <span class="pr-2 text-gray-700">{{ experience.company }}</span> 
                    <span class="text-gray-600 font-light"> {{experience.city}}, {{experience.state}}</span>
                    <span class="flex-auto"></span>
                    <span class="text-sm text-gray-600">{{experience.startMonth}} {{experience.startYear}} - {{ experience.isCurrent ? "Present" : experience.endMonth+' '+experience.endYear }}</span>
                </h3>
                <ul class="text-gray-800 list-disc list-outside">
                    <li v-for="responsibility in experience.responsibilities" :key="responsibility" class="mb-1 md:mb-0">{{ responsibility.responsibility}} <ul v-if="responsibility.tags" class="text-gray-500 block text-sm md:inline md:text-base">(<li class="inline" v-for="(tag,index) in responsibility.tags" :key="tag"> {{ tag }}<span v-if="index+1 < responsibility.tags.length">,</span></li>)</ul></li>

                </ul>
            </article>
            
        </section>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                experiences: []
            }
        },
        mounted()
        {
            this.getExperiences();
        },
        methods: {
            async getExperiences() {
                let experiences = await axios.get('/data/experiences.json');
                this.experiences = experiences.data.experiences;
            }
        }
        
    }
</script>

<style scoped>

</style>