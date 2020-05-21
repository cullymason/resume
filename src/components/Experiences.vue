<template>
    <section>
            <h2 class="text-lg md:text-xl uppercase font-black  text-gray-50 bg-orange-500 tracking-wider pl-2 py-1 mt-2 mb-4">Experience</h2>
            <article v-for="experience in experiences" :key="experience" class="mb-8 md:mb-6">
                <h3 class="flex items-start justify-between flex-col md:flex-row py-1 mb-2 pl-2 border-l-8 border-orange-500">
                    <div class="flex flex-col">
                        <span class="font-bold text-lg text-orange-600 pr-1 border-gray-300">{{ experience.title }}</span>
                        <span class="pr-2 text-sm text-gray-700">{{ experience.company }}</span> 
                        
                        <span class="flex-auto"></span>
                    </div>
                    <div class="flex flex-col items-start md:items-end">
                        
                        <div class="text-sm upper text-gray-500">{{experience.startMonth}} {{experience.startYear}} - {{ experience.isCurrent ? "Present" : experience.endMonth+' '+experience.endYear }}</div>
                        <div class="text-gray-500 text-sm font-light hidden md:flex md:items-center">
                            <div class="mr-1">
                                <svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z"/>
                                </svg>
                            </div> 
                            <div>
                                {{experience.city}}, {{experience.state}}
                            </div>
                        </div>
                    </div>
                    
                </h3>
                <ul class="text-gray-800 list-disc list-outside max-w-full md:max-w-xl lg:max-w-3xl">
                    <li v-for="responsibility in experience.responsibilities" :key="responsibility" class="mb-2 ml-5">
                        <span>{{ responsibility.responsibility}} </span>
                        <ul v-if="responsibility.tags" class=" block hidden md:block">
                            <li class="inline text-orange-400 font-bold tracking-wide uppercase text-xs bg-orange-100 mr-3 rounded px-2" v-for="tag in responsibility.tags" :key="tag">{{ tag }}</li>
                        </ul>
                    </li>

                </ul>
            </article>
            
        </section>
</template>

<script>
    import experiences from "../data/experiences.json"
    export default {
        data(){
            return {
                experiences: experiences.experiences
            }
        },
        
        
    }
</script>

<style scoped>

</style>