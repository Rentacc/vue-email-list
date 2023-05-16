const app = new Vue({
    el: '#app',
    data() {
      return {
        emailList: [],
      };
    },
    mounted() {
      this.generateEmails();
    },
    methods: {
      async generateEmails() {
        for (let i = 0; i < 10; i++) {
          const response = await fetch(
            'https://flynn.boolean.careers/exercises/api/random/mail'
          );
          const data = await response.json();
          this.emailList.push(data.response);
        }
      },
    },
    template: `
      <div class="container">
        <h1>Vue Email List</h1>
  
        <div v-if="emailList.length === 10">
          <ul>
            <li v-for="(email, index) in emailList" :key="index">{{ email }}</li>
          </ul>
        </div>
  
        <div v-else>
          <p>Generazione indirizzi email in corso...</p>
        </div>
      </div>
    `,
  });
  