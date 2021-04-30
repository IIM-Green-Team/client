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
          <img src="" alt="" />
          <span class="form__data">{{ kms * firstSelected.CO2 }}</span>
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
          <img src="" alt="" />
          <span class="form__data">{{ kms * secondSelected.CO2 }}</span>
          <span class="form__unit">KgCO2eq/kg</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import transport from '../static/api/transport.json'
import stepper from '~/mixins/stepper'
export default {
  mixins: [stepper('transport')],
  data() {
    return {
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
      width: 80%;
      border: none;
      border-bottom: solid 1px $color-grey;
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
