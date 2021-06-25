<template>
  <div class="page-formulaire">
    <div class="col-2">step</div>
    <div class="c-form col-8">
      <div class="c-form__group">
        <p class="col-12 c-form__question">Question 1</p>
        <p class="col-12 c-form__title">Achètes-tu uniquement du bio ?</p>
        <div class="c-form__group--radio">
          <input
            id="1"
            v-model="picked1"
            class="radio"
            type="radio"
            name="q1"
            value="1"
            required
            @change="onInputChange"
          />
          <label for="1">Jamais <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            v-model="picked1"
            data-id="2"
            class="radio"
            type="radio"
            name="q1"
            value="2"
            required
            @change="onInputChange"
          />
          <label for="2">1 repas sur 2 <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            id="3"
            v-model="picked1"
            class="radio"
            type="radio"
            name="q1"
            value="3"
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
            id="4"
            v-model="picked2"
            class="radio"
            type="radio"
            name="q2"
            value="1"
            required
          />
          <label for="4">Jamais <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            id="5"
            v-model="picked2"
            class="radio"
            type="radio"
            name="q2"
            value="2"
            required
          />
          <label for="5">1 repas sur 2 <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            id="6"
            v-model="picked2"
            class="radio"
            type="radio"
            name="q2"
            value="3"
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
            id="7"
            v-model="picked3"
            class="radio"
            type="radio"
            name="q3"
            value="1"
            required
          />
          <label for="7">Jamais <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            id="8"
            v-model="picked3"
            class="radio"
            type="radio"
            name="q3"
            value="2"
            required
          />
          <label for="8">1 repas sur 2 <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            id="9"
            v-model="picked3"
            class="radio"
            type="radio"
            name="q3"
            value="3"
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
            id="10"
            v-model="picked4"
            class="radio"
            type="radio"
            name="q4"
            value="1"
            required
          />
          <label for="10">Plusieurs fois par semaine <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            id="11"
            v-model="picked4"
            class="radio"
            type="radio"
            name="q4"
            value="2"
            required
          />
          <label for="11">De temps en temps <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            id="12"
            v-model="picked4"
            class="radio"
            type="radio"
            name="q4"
            value="3"
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
import { mapActions } from 'vuex'

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
  mounted() {
    this.updateQuestionScore({ id: 1, value: 3 })
  },
  methods: {
    ...mapActions(['updateQuestionScore']),
    onInputChange(e) {
      console.log({ value: +e.target.value, id: +e.target.id })
      // recupere l'id
      // recupere la valeur
      // this.updateQuestionScore({ id: 1, value: 3 })
    },
  },
}
</script>
