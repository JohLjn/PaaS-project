<script>
import PoemContainer from "../components/PoemContainer.vue";
export default {
  components: {
    PoemContainer,
  },
  data() {
    return {
      name: null,
      age: null,
      password: null,
      poemtext: null,
    };
  },
  methods: {
    applyPoem() {
      fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          age: this.age,
          password: this.password,
          poemtext: this.poemtext,
        }),
      }).catch((error) => {
        console.error("Error:", error);
      });
    },
  },
};
</script>

<template>
  <div class="main-container">
    <div id="form-container">
      <h2>Framhäv din kreativa <span>diktkunskap!</span></h2>
      <div id="input-info">
        <div class="align-info">
          <label for="name">Namn *</label>
          <input v-model="name" type="text" id="name" />
        </div>
        <div class="align-info">
          <label for="age">Ålder *</label>
          <input v-model="age" type="number" id="age" />
        </div>
        <div class="align-info">
          <label for="password">Lösenord * (Du kommer förstå varför)</label>
          <input v-model="password" type="text" id="password" />
        </div>
      </div>
      <textarea
        v-model="poemtext"
        placeholder="Gud som haver programmerare kärt..."
      ></textarea>
      <button @click="applyPoem">Skicka!</button>
    </div>
    <PoemContainer />
  </div>
</template>

<style scoped lang="scss">
@import "../style.scss";

.main-container {
  width: 70%;
  margin-top: 10rem;
  #form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    border-bottom: 1px solid #fff;
  }
  h2 {
    font-size: 3rem;
    span {
      color: #00dc82;
    }
  }
  textarea {
    border: 1px solid #fff;
    padding: 15px;
    width: 50%;
    height: 20vh;
    color: #fff;
    margin-top: 3rem;
    @include border-radius(3px);
    background: $primary-color;
    &::placeholder {
      color: #fff;
    }
    &:focus {
      outline: none;
    }
  }
  button {
    @include casual-button();
    margin-top: 2.5rem;
  }
  #input-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    width: 40%;
    margin-top: 2rem;
    .align-info {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    input {
      padding: 5px 5px 5px 2px;
      border: none;
      border-bottom: 1px solid #fff;
      background: $primary-color;
      font-size: 1rem;
      color: #fff;
      &:focus {
        outline: none;
      }
    }
  }
  label {
    margin-bottom: 7px;
    font-weight: 600;
  }
}
</style>
