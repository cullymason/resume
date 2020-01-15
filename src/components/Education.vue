 <template>
  <section>
      
    <h2
      class="text-lg md:text-xl uppercase font-black text-orange-500 tracking-wider mt-2 mb-2"
    >Education</h2>
    <article v-for="school in schools" :key="school">
    <h3 class="flex flex-col md:flex-row mb-1 pb-1">
      <span class="font-bold text-gray-900 pr-1">{{school.name}},</span>
      <span class="pr-2 text-gray-800">{{school.degree}}</span>
      <span class="text-gray-600">{{school.startYear}}-{{school.endYear}}</span>
    </h3>
    <small v-if="school.disclaimer" class="text-gray-700 italic mb-2"> {{school.disclaimer}} </small>
    <ul v-for="accomplishment in school.accomplishments" :key="accomplishment" class="list-disc list-outside mt-2">
      <li> {{accomplishment}} </li>
    </ul>
    </article>
  </section>
</template>
 
 <script>
import axios from "axios";
export default {
data() {
        return {
            schools: []
        }
    },
  async mounted() {
    let education = await axios.get("/data/education.json");
    this.schools = education.data.schools;
  }
};
</script>
 
 <style scoped>
</style>