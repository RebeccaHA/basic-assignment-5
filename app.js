const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      input: "",
      listVisible: true
    };
  },
  computed: {
    buttonText() {
      return this.listVisible ? "Hide list" : "Show list";
    }
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
