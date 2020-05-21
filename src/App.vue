<template>
  <div class=" max-w-6xl px-0 md:px-12 pt-6 pb-12 mx-auto px-6 bg-white mt-0 md:my-8 text-gray-800 subpixel-antialiased shadow-lg">
      <vue-headful
            title="Cully Mason's Resume"
        />
        <header class="flex pb-6">
            <div class="flex-auto flex items-end">
               <span class="font-black justify-end content-end tracking-wide text-gray-400 text-xl md:text-3xl uppercase">Resume</span>
            </div>
            <contact-vue />
        </header>
        <section>
            <h2 class="text-lg md:text-xl uppercase font-black border-l-8 border-orange-500  text-white bg-orange-500 tracking-wider pl-2 py-1 mt-2 mb-2">Objective Statement</h2>
            <p class="text-gray-800 py-4 ml-2">
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

import vueHeadful from 'vue-headful';

export default {
  name: "app",
  components: {
      SkillsVue,
      ExperiencesVue,
      ContactVue,
      EducationVue,
      vueHeadful,

  },
  meta: {
      title: 'About Page - Example App',
      metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.'
        }
      ]
    }
};
</script>

<style>

</style>
