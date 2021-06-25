<template>
  <div class="electricite">
    <div class="container-fluid">
      <div class="row mx-2 justify-content-around">
        <div class="col-12 col-sm-4">
          <h1 class="electricite__title--main">Electricité</h1>
        </div>
        <div class="col-12 col-sm-5"></div>
      </div>
      <div class="row mx-2 justify-content-around">
        <div class="col-12 col-sm-4">
          <h3 class="electricite__title">Choisissez l’équipement voulue</h3>
          <div class="row">
            <div
              v-for="({ label }, index) in electriciteData"
              :key="index"
              class="col-6 electricite__item"
              :class="{
                'electricite__item--is-selected': label === selectedLabel,
              }"
              tabindex="0"
              @click="onItemClick(label, index)"
              @keypress.enter="onItemClick(label, index)"
            >
              <img :src="require(`../assets/img/electricite/${label}.svg`)" />
              <!-- <div class="electricite__label">{{ equipements }}</div> -->
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-5">
          <h3 class="electricite__title">
            Sa consommation énergetique moyenne en kWh/m2/an
          </h3>
          <div class="electricite__conso-container">
            <div
              v-for="([label, color], index) in conso"
              :key="index"
              :style="{
                backgroundColor: color,
                paddingRight: `${index * 60}px`,
              }"
              class="electricite__conso-item"
            >
              <div class="electricite__conso-item-text">{{ label }}</div>
              <div
                class="arrow-right"
                :style="{ borderLeftColor: color }"
              ></div>
            </div>
            <div
              v-if="selectedAverageValue"
              class="electricite__indicator"
              :style="{ transform: `translateY(${50 * step + 32 * step}px)` }"
            >
              {{ selectedAverageValue | replaceDotByComma }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable camelcase */
import stepper from '@/mixins/stepper'
import transition from '@/utils/pageTranstion'
import electriciteData from '@/static/api/electricite.json'

export default {
  filters: {
    replaceDotByComma(value) {
      return value.toString().replace('.', ',')
    },
  },
  mixins: [stepper('electricite')],
  transition,
  data() {
    return {
      electriciteData,
      conso: [
        ['<50', '#08B865', (v) => v < 50],
        ['51 - 90', '#7ABE69', (v) => v > 50 && v <= 90],
        ['91 - 150', '#C8C26B', (v) => v > 90 && v <= 150],
        ['151 - 230', '#FBC56D', (v) => v > 150 && v <= 230],
        ['231 - 330', '#F6A463', (v) => v > 230 && v <= 330],
        ['331 - 451', '#F2885A', (v) => v > 330 && v <= 451],
        ['> 451', '#E94444', (v) => v > 451],
      ],
      selectedLabel: null,
      step: null,
    }
  },
  computed: {
    selectedAverageValue() {
      if (this.selectedLabel) {
        const {
          conso_peu_efficaces,
          conso_efficaces,
        } = this.electriciteData.find(
          ({ label }) => label === this.selectedLabel
        )
        return (parseInt(conso_peu_efficaces) + parseInt(conso_efficaces)) / 2
      }
      return null
    },
  },
  methods: {
    onItemClick(label, index) {
      this.selectedLabel = label
      const {
        conso_peu_efficaces,
        conso_efficaces,
      } = this.electriciteData.find(({ label }) => label === this.selectedLabel)
      const average =
        (parseInt(conso_peu_efficaces) + parseInt(conso_efficaces)) / 2
      this.step = this.conso.findIndex(([, , f]) => f(average))
    },
  },
}
</script>

<style lang="scss">
.electricite {
  &__title {
    font-size: 24px;
    color: $color-lightblue;

    &--main {
      font-size: 30px;
      color: $color-blue;
      margin: 0;
    }
  }
  &__item {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 32px 0;

    text-align: center;

    cursor: pointer;
    filter: grayscale(100%);

    &--is-selected {
      filter: grayscale(0%);
    }
  }
  &__label {
    position: relative;
    margin-top: 16px;
    transform: translateX(-25%);
    font-size: 14px;
    color: $color-blackgrey;
  }
  &__conso-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  &__indicator {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    height: 50px;
    margin: 16px 0;

    color: $color-lightblue;
    font-size: 32px;
    font-weight: bold;

    transition: transform 0.3s ease;

    &::before {
      content: '';
      position: absolute;
      left: -66px;
      width: 32px;
      height: 32px;
      background: url('@/assets/img/electricite/conso-arrow.svg') center
        no-repeat;
      background-size: 95% 95%;
    }
  }
  &__conso-item {
    position: relative;
    display: inline-block;
    padding: 16px 24px;
    color: #fff;
    margin: 16px 0;
    &-text {
      padding-right: 16px;
      white-space: nowrap;
    }

    & .arrow-right {
      position: absolute;
      top: 0;
      right: -25px;
      width: 0;
      height: 0;
      border-top: 25px solid transparent;
      border-bottom: 25px solid transparent;

      border-left: 25px solid green;
    }
  }
}
</style>
