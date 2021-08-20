<template>
  <div class="container">
    <div class="col-3 u-green-900"></div>
    <div class="col-3 u-green-600"></div>
    <div class="col-3 u-green-300"></div>
    <div class="col-3 u-green"></div>

    <div class="content">
      <logo />
      <p>
        Sous forme de storytelling, parcourez une série d’étapes afin de
        <br />prendre conscience l’impact des déchets sur notre environnement
      </p>
      <nuxt-link class="link-intro" to="/alimentation">Commencer</nuxt-link>
    </div>
    <img class="img-intro" src="../assets/img/intro-img.png" alt="intro" />
  </div>
</template>

<script>
export default {
  layout: 'intro',
}
</script>

<style lang="scss">
.container {
  display: flex;
  position: relative;
  margin: 0;
  padding: 0;
  max-width: 100%;
  width: 100%;
  min-height: 100vh;
  font-family: $font-poppins;
}

.content {
  position: absolute;
  top: 10%;
  width: 100%;
  text-align: center;

  h1 {
    margin-bottom: 50px;
  }

  p {
    font-size: 1.6rem;
    text-align: center;
    font-weight: 300;
    line-height: 2.5rem;
    color: $color-white;
  }

  .logo {
    width: 150px;
  }
}

.img-intro {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.link-intro {
  z-index: 3;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 30px;
  background-color: $color-white;
  border-radius: 3px;
  color: $color-lightblue;
  font-size: 14px;
  text-decoration: none;
}

.u-green-900 {
  background-color: $color-blue;
}

.u-green-600 {
  background-color: $color-lightblue;
}

.u-green-300 {
  background-color: $color-lightblue;
  opacity: 0.7;
}

.u-green {
  background-color: $color-lightblue;
  opacity: 0.5;
}
</style>
