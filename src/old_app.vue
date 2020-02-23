<template>
  <div class=" max-w-5xl pt-6 pb-6 mx-auto px-6 text-gray-800 subpixel-antialiased">
        <header class="flex items-center">
            <div class="flex-auto">
               <span class="font-light tracking-wide text-gray-600 text-xl md:text-3xl uppercase">Resume</span>
            </div>
            <contact-vue />
        </header>
        <section>
            <h2 class="text-lg md:text-xl uppercase font-black text-orange-500 tracking-wider mt-2 mb-2">Objective Statement</h2>
            <p class="text-gray-800">
                To leverage technology and clear communication to lead, develop, deploy and teach elegant and effective solutions.
            </p>
        </section>
        <skills-vue />
        <experiences-vue />
        <education-vue />
    </div>
</template>

<script>
import SkillsVue from './components/Skills.vue';
import ExperiencesVue from './components/Experiences.vue'
import ContactVue from './components/Contact.vue';
import EducationVue from './components/Education'

export default {
  name: "app",
  components: {
      SkillsVue,
      ExperiencesVue,
      ContactVue,
      EducationVue
      
  }
};
</script>

<style>

</style>
