<template>
  <div class="page-formulaire">
    <div class="col-2">step</div>
    <div class="c-form col-8">
      <div class="c-form__group">
        <p class="col-12 c-form__question">Question 8</p>
        <p class="col-12 c-form__title">
          Tries-tu les journaux, les boîtes en carton, le papier, les boîtes de
          conserve, les bouteilles en verre ou en plastique et autres matériaux
          ?
        </p>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q8"
            id="26"
            value="2"
            v-model="picked8"
            required
          />
          <label for="26">Oui <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q8"
            id="27"
            value="1"
            v-model="picked8"
            required
          />
          <label for="27">Non <span></span></label>
        </div>
      </div>
      <div class="c-form__group">
        <p class="col-12 c-form__question">Question 9</p>
        <p class="col-12 c-form__title">Faites-vous du compostage ?</p>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q9"
            id="28"
            value="2"
            v-model="picked9"
            required
          />
          <label for="28">Oui <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q9"
            id="29"
            value="1"
            v-model="picked9"
            required
          />
          <label for="29">Non <span></span></label>
        </div>
      </div>
      <div class="c-form__group">
        <p class="col-12 c-form__question">Question 9</p>
        <p class="col-12 c-form__title">
          Comment te rends tu au travail/école ?
        </p>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q10"
            id="30"
            value="4"
            v-model="picked10"
            required
          />
          <label for="30">Pied / Vélo <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q11"
            id="31"
            value="3"
            v-model="picked10"
            required
          />
          <label for="31">Trotinette/Vélo électrique <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q12"
            id="32"
            value="2"
            v-model="picked10"
            required
          />
          <label for="32">Transport en commun <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q13"
            id="33"
            value="1"
            v-model="picked10"
            required
          />
          <label for="33">Voiture <span></span></label>
        </div>
      </div>
    </div>
    <div class="col-2 d-flex align-items-end">
      <nuxt-link class="c-form__btn" to="/formulaire-step-4">Suivant</nuxt-link>
    </div>
  </div>
</template>

<script>
import transition from '@/utils/pageTranstion'
import stepper from '@/mixins/stepper'

export default {
  mixins: [stepper('')],
  data() {
    return {
      transition,
      picked8: 0,
      picked9: 0,
      picked10: 0,
    }
  },
  watch: {
    picked8() {
      this.$emit(
        'child-total3',
        parseInt(this.picked8) +
          parseInt(this.picked9) +
          parseInt(this.picked10)
      )
    },
    picked9() {
      this.$emit(
        'child-total3',
        parseInt(this.picked8) +
          parseInt(this.picked9) +
          parseInt(this.picked10)
      )
    },
    picked10() {
      this.$emit(
        'child-total3',
        parseInt(this.picked8) +
          parseInt(this.picked9) +
          parseInt(this.picked10)
      )
    },
  },
}
</script>
