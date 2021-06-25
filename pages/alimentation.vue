<template>
  <div>
    <page-title
      title="Alimentation"
      sub-title="Comparez l’empreinte carbone de plusieurs aliments entre eux"
    />
    <img class="arrow-img" :src="arrow" alt="arrow" />
    <div class="d-flex flex-wrap">
      <div class="form-alim col-12 col-sm-5">
        <p class="label">Sélectionnez un aliment</p>
        <select @change="firstSelectedIndex = $event.target.value">
          <option
            v-for="(item, i) in fruits"
            :key="i"
            :value="i"
            :selected="firstSelectedIndex === i"
          >
            {{ item.emoji }}
            {{ item.label.fr }}
          </option>
        </select>
        <p class="label">Sélectionnez un deuxième aliment</p>
        <select @change="secondSelectedIndex = $event.target.value">
          <option
            v-for="(item, i) in fruits"
            :key="i"
            :value="i"
            :selected="secondSelectedIndex === i"
          >
            {{ item.emoji }}
            {{ item.label.fr }}
          </option>
        </select>
        <p class="label">Sélectionnez un aliment transformé</p>
      </div>
      <div class="col-12 col-sm-7">
        <div class="graph">
          <div class="row">
            <span class="icon">{{ firstSelected.emoji }}</span>
            <span
              :style="{ width: `${(firstSelected.CO2 * 100) / 5}%` }"
              class="bar"
            ></span>
            <span class="value">{{ firstSelected.CO2 }}</span>
          </div>

          <div class="row">
            <span class="icon">{{ secondSelected.emoji }}</span>
            <span
              :style="{ width: `${(secondSelected.CO2 * 100) / 5}%` }"
              class="bar"
            ></span>
            <span class="value">{{ secondSelected.CO2 }}</span>
          </div>

          <div class="row">
            <img class="icon" :src="shoppingBasket" alt="shopping-basket" />
            <span :style="{ width: '5%' }" class="bar"></span>
            <span class="value">1.2</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import transition from '@/utils/pageTranstion'
import stepper from '@/mixins/stepper'
import arrow from '../assets/img/arrow.png'
import shoppingBasket from '../assets/img/shopping-basket.svg'
import fruits from '../static/api/alimentation.json'
export default {
  mixins: [stepper('alimentation')],
  data() {
    return {
      transition,
      arrow,
      shoppingBasket,
      fruits,
      firstSelectedIndex: 0,
      secondSelectedIndex: 1,
      aliments: [],
    }
  },
  computed: {
    firstSelected() {
      return this.fruits[this.firstSelectedIndex]
    },
    secondSelected() {
      return this.fruits[this.secondSelectedIndex]
    },
    maxCO2() {
      return Math.max(...this.fruits.map((product) => product.CO2))
    },
  },
}
</script>

<style lang="scss">
.arrow-img {
  padding: 30px 0;
  margin-left: 35%;
  width: 150px;
}

.graph {
  position: relative;
  width: 100%;
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
    padding: 20px 0 20px 0;
    margin-left: -50px;

    .icon {
      width: 30px;
      height: 30px;
      margin-right: 20px;
      font-size: 25px;
    }

    .bar {
      height: 35px;
      max-width: calc(100% - 100px);
      min-width: 20px;
      margin-right: 10px;
      background-color: #659a9730;
      transition: width 1s ease;
    }

    .value {
      color: $color-yellow;
    }
  }
}

.form-alim {
  font-family: $font-poppins;
  .label {
    margin-bottom: 10px;
    color: $color-blackgrey;
    font-weight: 400;
    letter-spacing: 0.01rem;
  }

  select {
    padding: 5px 0;
    margin-bottom: 50px;
    border: none;
    border-bottom: solid 1px $color-grey;
    background-color: transparent;
  }
}
</style>
