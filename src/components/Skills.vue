<template>
    <section class="">
            <h2 class="text-lg md:text-xl uppercase font-black  text-gray-50 bg-orange-500 tracking-wider pl-2 py-1 mt-2 mb-2">Skills</h2>
            <ul class="list-disc list-outside py-2">
                <li class="ml-6" v-for="skill in skills" :key="skill">
                    {{skill}}
                </li>    
    
            </ul>
        </section>
</template>

<script>
    import skills from "../data/skills.json"
    export default {

        data() {
            return {
                skills: skills.skills
            }
        },

    }
</script>

<style>

</style>