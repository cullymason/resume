<template>
    <section>
            <h2 class="text-lg md:text-xl uppercase font-black  text-gray-50 bg-orange-500 border-l-8 border-orange-500 tracking-wider pl-2 py-1 mt-2 mb-4">Experience</h2>
            <article style="page-break-inside:avoid" v-for="experience in experiences" :key="experience" class="mb-8 md:mb-1">
                <h3 class="flex items-start justify-between flex-col md:flex-row py-1 mb-2 pl-2 border-l-8 border-orange-500">
                    <div class="flex flex-col">
                        <span class="font-bold text-lg text-orange-600 pr-1 border-gray-300">{{ experience.title }}</span>
                        <span class="pr-2 text-xs uppercase tracking-wide font-bold text-gray-700">{{ experience.company }}</span> 
                    </div>
                    <span class="flex-auto"></span>
                    <div class="flex flex-col items-start md:items-end">
                        
                        <div class="flex items-center text-sm upper font-medium text-gray-800">
                            <span>
                                {{ experience.startMonth }} {{experience.startYear}}
                            </span>
                            <span class="mx-1">
                                -
                            </span>
                            <span>
                                {{ experience.isCurrent ? "Present" : experience.endMonth+' '+experience.endYear }}
                            </span>
                                
                        </div>
                        <div class="text-gray-400 text-xs font-semibold tracking-wide uppercase hidden md:flex md:items-center">
                            <div class="mr-1">
                                <svg class="fill-current w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
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
                        <ul v-if="responsibility.tags" class=" block hidden print:block md:block">
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