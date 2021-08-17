<template>
  <div class="screen-size">
    <logo />
    <h1>Veuillez redimensionner votre écran.</h1>
    <p class="title">
      Nous voulons que nos utilisateurs bénéficient de la meilleure expérience
      possible.
    </p>
  </div>
</template>

<style lang="scss">
.screen-size {
  display: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 100;

  @media only screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}

h1 {
  color: $color-blue;
  font-size: 25px;
}
</style>
