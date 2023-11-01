<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
      helloResponse: null,
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
    getData() {
      fetch("/api")
        .then((response) => response.json())
        .then((result) => {
          this.helloResponse = `Hello ${result.hello}!`;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="getData">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <p>{{ helloResponse }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
