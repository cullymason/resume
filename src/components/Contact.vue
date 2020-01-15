<template>
  <div class="text-right">
    <p class="font-bold mb-1 text-gray-900">{{contact.firstName}} {{contact.lastName}}</p>
    <address class="not-italic text-gray-800 mb-0 md:mb-1 text-sm">
      <span class="block">{{contact.city}}, {{contact.state}} {{contact.zipCode}}</span>
    </address>
    <a class="text-gray-800 text-sm" :href="emailURL">{{contact.email}}</a>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            contact: {}
        }
    },
    computed: {
        emailURL()
        {
           return "mailto:"+this.contact.email;
        }
    },
    async mounted()
    {
        let contact = await axios.get('/data/contact.json');
        this.contact = contact.data.contact;
    }
};
</script>

<style scoped>
</style>