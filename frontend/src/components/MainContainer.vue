<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <div id="main-container">
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
    </div>
    <textarea
      v-model="text"
      placeholder="Gud som haver programmerare kärt..."
    ></textarea>
    <button>Skicka!</button>
  </div>
</template>

<style scoped lang="scss">
@import "../style.scss";

#main-container {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-bottom: 1px solid #fff;
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
    justify-content: center;
    gap: 30px;
    width: 50%;
    margin-top: 2rem;
    .align-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      label {
        margin-bottom: 7px;
      }
    }
    input {
      padding: 5px 5px;
      margin-bottom: 3rem;
      border: none;
      border-bottom: 1px solid #fff;
      background: $primary-color;
      font-size: 1.2rem;
      color: #fff;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
