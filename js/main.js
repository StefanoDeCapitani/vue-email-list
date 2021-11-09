/* Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function () {
  const vm = new Vue({
    el: "#root",
    data: {
      emails: [],
    },
    methods: {
      getMultipleEmails(numOfEmails) {
        for (let i = 0; i < numOfEmails; i++) {
          axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
              this.emails.push(resp.data.response);
            });
        }
      },
    },
    mounted() {
      this.getMultipleEmails(10);
    },
  });
});
