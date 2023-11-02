<script>
export default {
  data() {
    return {
      poemsDb: null,
      name: ""
    };
  },
  created() {
    this.fetchPoems();
  },
  methods: {
    fetchPoems() {
      fetch("/api")
        .then((response) => response.json())
        .then((result) => {
          this.poemsDb = result;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  computed: {
    currentDate() {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    },
  },
};
</script>

<template>
  <div id="poems-container">
    <div class="poem-post" v-for="poem in poemsDb" :key="poem.id">
      <div class="author-container">
        <h3>{{ poem.name }},</h3>
        <span>{{ poem.age }}</span>
        <div class="customize-post">
          <p>Edit</p>
          <p>Remove</p>
        </div>
      </div>
      <p class="poem-text">
        {{ poem.poemtext }}
      </p>
      <p class="publish-date">{{ currentDate }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../style.scss";
#poems-container {
  width: 70%;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 6rem;
  .poem-post {
    border: 1px solid $box-border;
    padding: 10px 25px 0 25px;
    margin-top: 3rem;
    .author-container {
      display: flex;
      align-items: center;
      gap: 8px;
      span {
        margin-top: 2px;
      }
      .customize-post {
        display: flex;
        gap: 10px;
        margin-left: auto;
      }
    }
    .poem-text,
    .publish-date {
      font-style: italic;
    }
    .publish-date {
      margin-top: 2rem;
      font-size: 13px;
    }
  }
}
</style>
