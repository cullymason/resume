 <template>
  <section>
    <h2
      class="text-lg md:text-xl uppercase font-black  text-gray-50 bg-orange-500 border-l-8 border-orange-500 tracking-wider pl-2 py-1 mt-2 mb-2"
    >Education</h2>
    <article v-for="school in schools" :key="school">
      <h3 class="flex flex-col md:flex-row mb-1 pb-1">
        <span class="font-bold text-gray-900 pr-1">{{school.name}},</span>
        <span class="pr-2 text-gray-800">{{school.degree}}</span>
        <span class="text-gray-600">{{school.startYear}}-{{school.endYear}}</span>
      </h3>
      <small v-if="school.disclaimer" class="text-gray-700 italic mb-2">{{school.disclaimer}}</small>
      <ul
        v-for="accomplishment in school.accomplishments"
        :key="accomplishment"
        class="list-disc list-inside mt-2"
      >
        <li>{{accomplishment}}</li>
      </ul>
    </article>
  </section>
</template>
 
 <script>
import education from "../data/education.json"
export default {
  data() {
    return {
      schools: education.schools
    };
  }
};
</script>
 
 <style scoped>
</style>