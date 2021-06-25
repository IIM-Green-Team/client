<template>
  <div class="page-formulaire">
    <div class="col-2">step</div>
    <div class="c-form col-8">
      <div class="c-form__group">
        <p class="col-12 c-form__question">Question 1</p>
        <p class="col-12 c-form__title">Achètes-tu uniquement du bio ?</p>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q1"
            id="1"
            value="1"
            v-model="picked1"
            required
          />
          <label for="1">Jamais <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q1"
            id="2"
            value="2"
            v-model="picked1"
            required
          />
          <label for="2">1 repas sur 2 <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q1"
            id="3"
            value="3"
            v-model="picked1"
            required
          />
          <label for="3">Tous les repas <span></span></label>
        </div>
      </div>
      <div class="c-form__group">
        <p class="col-12 c-form__question">Question 2</p>
        <p class="col-12 c-form__title">
          A quelle fréquence mangez-vous des plats contenant de la viande ou du
          poisson
        </p>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q2"
            id="4"
            value="1"
            v-model="picked2"
            required
          />
          <label for="4">Jamais <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q2"
            id="5"
            value="2"
            v-model="picked2"
            required
          />
          <label for="5">1 repas sur 2 <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q2"
            id="6"
            value="3"
            v-model="picked2"
            required
          />
          <label for="6">Tous les repas <span></span></label>
        </div>
      </div>
      <div class="c-form__group">
        <p class="col-12 c-form__question">Question 3</p>
        <p class="col-12 c-form__title">
          A quelle fréquence consommez-vous des produits laitiers ?
        </p>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q3"
            id="7"
            value="1"
            v-model="picked3"
            required
          />
          <label for="7">Jamais <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q3"
            id="8"
            value="2"
            v-model="picked3"
            required
          />
          <label for="8">1 repas sur 2 <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q3"
            id="9"
            value="3"
            v-model="picked3"
            required
          />
          <label for="9">Tous les repas <span></span></label>
        </div>
      </div>
      <div class="c-form__group">
        <p class="col-12 c-form__question">Question 4</p>
        <p class="col-12 c-form__title">
          À quelle fréquence jetez-vous de la nourriture ?
        </p>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q4"
            id="10"
            value="1"
            v-model="picked4"
            required
          />
          <label for="10">Plusieurs fois par semaine <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q4"
            id="11"
            value="2"
            v-model="picked4"
            required
          />
          <label for="11">De temps en temps <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q4"
            id="12"
            value="3"
            v-model="picked4"
            required
          />
          <label for="12">Presque jamais <span></span></label>
        </div>
      </div>
    </div>
    <div class="col-2 d-flex align-items-end">
      <nuxt-link class="c-form__btn" to="/formulaire-step-2">Suivant</nuxt-link>
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
      picked1: 0,
      picked2: 0,
      picked3: 0,
      picked4: 0,
    }
  },
  watch: {
    picked1() {
      this.$emit(
        'child-total1',
        parseInt(this.picked1) +
          parseInt(this.picked2) +
          parseInt(this.picked3) +
          parseInt(this.picked4)
      )
    },
    picked2() {
      this.$emit(
        'child-total1',
        parseInt(this.picked1) +
          parseInt(this.picked2) +
          parseInt(this.picked3) +
          parseInt(this.picked4)
      )
    },
    picked3() {
      this.$emit(
        'child-total1',
        parseInt(this.picked1) +
          parseInt(this.picked2) +
          parseInt(this.picked3) +
          parseInt(this.picked4)
      )
    },
    picked4() {
      this.$emit(
        'child-total1',
        parseInt(this.picked1) +
          parseInt(this.picked2) +
          parseInt(this.picked3) +
          parseInt(this.picked4)
      )
    },
  },
}
</script>
