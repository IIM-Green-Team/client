<template>
  <div>
    <page-title
      title="Transport"
      sub-title="Comparez l’empreinte carbone de plusieurs moyens de transports entre eux"
    />
    <p class="form__title">
      Pour
      <span><input v-model="kms" type="number" /></span> kilomètres parcouru
    </p>
    <div class="d-flex justify-content-around form">
      <div class="col-5">
        <div class="form__group">
          <label for="">Sélectionnez un moyen de transport</label>
          <select @change="firstSelectedIndex = $event.target.value">
            <option
              v-for="(item, i) in transport"
              :key="i"
              :value="i"
              :selected="firstSelectedIndex === i"
            >
              {{ item.titre }}
            </option>
          </select>
          <img
            class="img-select"
            :src="
              require(`../assets/img/transports/${firstSelected.label}.svg`)
            "
            :alt="firstSelected.label"
          />
          <span class="form__data">{{
            kms * firstSelected.CO2 > 1000000
              ? Math.round((kms * firstSelected.CO2) / 100000) / 10
              : kms * firstSelected.CO2 > 1000
              ? Math.round((kms * firstSelected.CO2) / 100) / 10
              : Math.round(kms * firstSelected.CO2 * 10) / 10
          }}</span>
          <span class="form__unit">KgCO2eq/kg</span>
        </div>
      </div>
      <div class="col-5">
        <div class="form__group">
          <label for="">Sélectionnez un moyen de transport</label>
          <select @change="secondSelectedIndex = $event.target.value">
            <option
              v-for="(item, i) in transport"
              :key="i"
              :value="i"
              :selected="secondSelectedIndex === i"
            >
              {{ item.titre }}
            </option>
          </select>
          <img
            class="img-select"
            :src="
              require(`../assets/img/transports/${secondSelected.label}.svg`)
            "
            :alt="secondSelected.label"
          />
          <span class="form__data">{{
            kms * secondSelected.CO2 > 1000000
              ? Math.round((kms * secondSelected.CO2) / 100000) / 10
              : kms * secondSelected.CO2 > 1000
              ? Math.round((kms * secondSelected.CO2) / 100) / 10
              : Math.round(kms * secondSelected.CO2 * 10) / 10
          }}</span>
          <span class="form__unit">KgCO2eq/kg</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import transition from '@/utils/pageTranstion'
import stepper from '@/mixins/stepper'
import transport from '../static/api/transport.json'

export default {
  mixins: [stepper('transport')],
  data() {
    return {
      transition,
      kms: 10,
      transport,
      firstSelectedIndex: 0,
      secondSelectedIndex: 1,
    }
  },
  computed: {
    firstSelected() {
      return this.transport[this.firstSelectedIndex]
    },
    secondSelected() {
      return this.transport[this.secondSelectedIndex]
    },
  },
}
</script>

<style lang="scss">
.form {
  width: 80%;
  margin: auto;

  &__title {
    margin: 50px 0;
    font-size: 22px;
    text-align: center;
    color: $color-blue;

    input {
      border: none;
      border-bottom: solid 1px $color-blue;
      width: 80px;
      text-align: center;
    }
  }

  &__group {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      margin-bottom: 20px;
      font-size: 14px;
      color: $color-blackgrey;
    }

    select {
      padding: 8px 0;
      width: 80%;
      border: none;
      border-bottom: solid 1px $color-grey;

      &:hover {
        border-bottom: solid 1px $color-black;
      }

      &:focus {
        outline: none;
      }
    }

    .img-select {
      padding: 10px;
      width: 50%;
    }
  }

  &__data {
    margin: 20px 0;
    font-size: 20px;
    font-weight: bold;
  }

  &__unit {
    color: $color-blackgrey;
  }
}
</style>
