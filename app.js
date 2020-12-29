const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      input: "",
      listVisible: true
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.input);
    },
    hideList() {
      this.listVisible = !this.listVisible;
    }
  }
});

app.mount("#assignment");
