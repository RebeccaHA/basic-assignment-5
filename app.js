const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      input: ""
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.input);
    }
  }
});

app.mount("#assignment");
