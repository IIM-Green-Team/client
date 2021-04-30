<template>
  <div>
    <page-title
      title="Alimentation"
      sub-title="Comparez l’empreinte carbone de plusieurs aliments entre eux"
    />
    <div class="d-flex">
      <div class="col-12 col-sm-5">Select</div>
      <div class="col-12 col-sm-5">
        <div class="graph">
          <div class="row">
            <img class="icon" src="" alt="" />
            <span class="bar"></span>
            <span class="value">0.53</span>
          </div>

          <div class="row">
            <img class="icon" src="" alt="" />
            <span class="bar"></span>
            <span class="value">0.75</span>
          </div>

          <div class="row">
            <img class="icon" src="" alt="" />
            <span class="bar"></span>
            <span class="value">1.2</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aliments: [],
    }
  },
  async fetch() {
    // await fetch('/api/alimentation').then((res) => {
    //   console.log(res.json())
    // })
  },
}
</script>

<style lang="scss">
.graph {
  width: 100%;
  height: 35vh;
  border-left: solid 1px $color-grey;
  border-bottom: solid 1px $color-grey;

  &:after {
    content: 'KgCO2eq/Kg';
    position: absolute;
    bottom: -30px;
    right: 0;
    color: $color-green;
  }

  .row {
    display: flex;
    align-items: center;
    padding: 20px 0 20px 15px;

    .icon {
    }

    .bar {
      height: 35px;
      min-width: 20px;
      margin-right: 10px;
      background-color: $color-lightgrey;
      transition: width 2s ease;
    }

    .value {
      color: $color-yellow;
    }
  }
}
</style>
