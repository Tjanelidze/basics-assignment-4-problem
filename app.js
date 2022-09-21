const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      inputStyle: '',
      display: true,
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        visible: this.display,
        hidden: !this.display,
      };
    },
    switchDispaly() {
      return { hidden: this.display };
    },
  },
  methods: {
    switchDispalyValue() {
      this.display = !this.display;
    },
  },
});

app.mount('#assignment');
