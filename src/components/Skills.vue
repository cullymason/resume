<template>
    <section>
            <h2 class="text-lg md:text-xl uppercase font-black text-orange-500 tracking-wider mt-2 mb-2">Skills</h2>
            <ul class="list-disc list-outside">
                <li v-for="skill in skills" :key="skill">
                    {{skill}}
                </li>    
    
            </ul>
        </section>
</template>

<script>
    import axios from 'axios';
    export default {
        mounted() {
            this.getSkills();
        },
        data() {
            return {
                skills: ["loading skills..."]
            }
        },
        methods: {
            async getSkills()
            {
                let skills =  await axios.get('/data/skills.json');
                this.skills = skills.data.skills
            }
        }
    }
</script>

<style>

</style>