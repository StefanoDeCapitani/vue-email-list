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
      pendingApiCalls: 0,
    },
    methods: {
      getMultipleEmails(numOfEmails) {
        numOfEmails = parseInt(numOfEmails);
        if (isNaN(numOfEmails) || this.pendingApiCalls > 0) {
          return;
        }
        this.pendingApiCalls = numOfEmails;
        this.emails = [];
        let emailsReceived = [];
        for (let i = 0; i < numOfEmails; i++) {
          axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
              emailsReceived.push(resp.data?.response);
              this.pendingApiCalls--;
              if (this.pendingApiCalls === 0) {
                this.emails = [...emailsReceived];
              }
            });
        }
      },
    },
  });
});
