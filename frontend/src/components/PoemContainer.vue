<script>
import EditPoem from "../components/EditPoem.vue";
export default {
  components: {
    EditPoem,
  },
  data() {
    return {
      poemsDb: null,
      name: "",
      editedPoemId: null,
      editPoemToggle: {},
      userPassword: null,
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
    removePoem(id, password) {
      if (this.userPassword !== password) {
        this.userPassword = window.prompt(
          "Ange lösenord vid skapelse av dikten för att redigera:"
        );
      }
      if (this.userPassword === password) {
        fetch(`/api/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result.message);
            this.fetchPoems();
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        alert("Felaktigt lösenord");
      }
    },
    editPoem(poemId, password) {
      if (this.userPassword !== password) {
        this.userPassword = window.prompt(
          "Ange lösenord vid skapelse av dikten för att redigera:"
        );
      }
      if (this.userPassword === password) {
        this.editPoemToggle[poemId] = !this.editPoemToggle[poemId];
      } else {
        alert("Felaktigt lösenord");
      }
    },
  },
};
</script>

<template>
  <div id="poems-container">
    <h2>Mästerverk</h2>
    <div class="poem-post" v-for="poem in poemsDb" :key="poem.id">
      <div class="author-container">
        <h3>{{ poem.name }},</h3>
        <span>{{ poem.age }}</span>
        <div class="customize-post">
          <p class="edit" @click="editPoem(poem.id, poem.password)">Edit</p>
          <p class="edit" @click="removePoem(poem.id, poem.password)">Remove</p>
        </div>
      </div>
      <p class="poem-text">
        {{ poem.poemtext }}
      </p>
      <p class="publish-date">{{ poem.publishdate }}</p>
      <EditPoem v-if="editPoemToggle[poem.id]" :key="poem.id" :poem="poem" />
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
  h2 {
    font-size: 3rem;
    text-align: center;
    color: $headers;
  }
  .poem-post {
    border: 1px solid #fff;
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
        .edit {
          font-size: 14px;
          @include transition(all 0.2s ease);
          &:last-child {
            color: #ff0000;
            &:hover {
              color: #ff0000;
            }
          }
          &:hover {
            cursor: pointer;
            color: #00dc82;
          }
        }
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
