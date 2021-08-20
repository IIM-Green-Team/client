<template>
  <div>
    <page-title
      title="Recommandation alimentaire"
      sub-title="Ce mois ci en Aout, nous pouvons consommer  comme fruits"
    />

    <div class="graph-info d-flex">
      <div v-for="(product, i) in fruitsTrend" :key="i" class="col-2">
        <div v-if="i <= 5">
          <p class="title">{{ product.label.fr }}</p>
          <p class="subtitle">
            <span>{{ product.CO2 }}</span> KgCO2eq
          </p>
          <span class="icon-info">{{ product.emoji }}</span>
          <p v-for="(item, index) in product.months" :key="index" class="month">
            <span v-if="index <= 3"> {{ monthName[item] }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import transition from '@/utils/pageTranstion'
import stepper from '@/mixins/stepper'
import fruits from '../static/api/alimentation.json'
export default {
  mixins: [stepper('alimentation-info')],
  transition,
  data() {
    return {
      fruits,
    }
  },

  computed: {
    fruitsTrend() {
      const currentMonnth = new Date().getMonth()
      const fruits = this.fruits
        .filter((product) => product.months.includes(currentMonnth))
        .sort((a, b) => (a.CO2 > b.CO2 ? 1 : -1))
      return fruits
    },

    monthName() {
      return [
        'janvier',
        'février',
        'mars',
        'avril',
        'mai',
        'juin',
        'juillet',
        'août',
        'septembre',
        'octobre',
        'novembre',
        'décembre',
      ]
    },
  },
}
</script>

<style lang="scss">
.graph-info {
  margin-top: 40px;
}

p {
  font-family: $font-poppins;
}

.title {
  font-size: 1rem;
  font-weight: 600;
  font-style: italic;
  color: $color-blue;
}

.subtitle {
  font-size: 12px;
  font-weight: 600;
  color: $color-blackgrey;

  span {
    font-size: 1.6rem;
    color: black;
  }
}

.col-2 {
  text-align: center;
}

.icon-info {
  position: relative;
  font-size: 3rem;

  &:before {
    display: block;
    margin-left: 50%;
    content: '';
    width: 1px;
    height: 100px;
    background-color: $color-grey;
  }
}

.month {
  font-size: 16px;
  font-weight: 300;
  margin: 4px;
  color: $color-blackgrey;
}
</style>
