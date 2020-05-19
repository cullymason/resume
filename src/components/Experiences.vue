<template>
    <section>
            <h2 class="text-lg md:text-xl uppercase font-black  text-gray-50 bg-orange-500 tracking-wider pl-2 py-1 mt-2 mb-4">Experience</h2>
            <article v-for="experience in experiences" :key="experience" class="mb-8 md:mb-6">
                <h3 class="flex items-start md:items-center flex-col md:flex-row py-1 mb-2 pl-2 border-l-8 border-orange-500">
                    <span class="font-bold text-lg text-orange-600 pr-1 border-gray-300">{{ experience.title }}</span>
                    <span class="pr-2 text-gray-700">{{ experience.company }}</span> 
                    <span class="text-gray-600 font-light"> {{experience.city}}, {{experience.state}}</span>
                    <span class="flex-auto"></span>
                    <span class="text-sm text-gray-600">{{experience.startMonth}} {{experience.startYear}} - {{ experience.isCurrent ? "Present" : experience.endMonth+' '+experience.endYear }}</span>
                </h3>
                <ul class="text-gray-800 list-disc list-outside max-w-full md:max-w-xl lg:max-w-3xl">
                    <li v-for="responsibility in experience.responsibilities" :key="responsibility" class="mb-2 ml-6">
                        <span>{{ responsibility.responsibility}} </span>
                        <ul v-if="responsibility.tags" class=" block hidden md:block">
                            <li class="inline text-gray-500 font-bold tracking-wide uppercase text-xs bg-gray-100 mr-3 rounded px-2" v-for="tag in responsibility.tags" :key="tag">{{ tag }}</li>
                        </ul>
                    </li>

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