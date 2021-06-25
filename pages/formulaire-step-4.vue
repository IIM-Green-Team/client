<template>
  <div class="page-formulaire">
    <div class="col-2">step</div>
    <div class="c-form col-8">
      <div class="c-form__group">
        <p class="col-12 c-form__question">Question 10</p>
        <p class="col-12 c-form__title">
          Quelle est la durée moyenne de vos douches ?
        </p>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q14"
            id="40"
            value="4"
            v-model="picked11"
            required
          />
          <label for="40"> inférieur à 5 min <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q14"
            id="41"
            value="3"
            v-model="picked11"
            required
          />
          <label for="41">environ 10 min <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q14"
            id="42"
            value="2"
            v-model="picked11"
            required
          />
          <label for="42">environ 15 min <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q14"
            id="43"
            value="1"
            v-model="picked11"
            required
          />
          <label for="43">Plus de 20 min <span></span></label>
        </div>
      </div>
      <div class="c-form__group">
        <p class="col-12 c-form__question">Question 11</p>
        <p class="col-12 c-form__title">Prends-tu des bains ?</p>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q15"
            id="44"
            value="1"
            v-model="picked12"
            required
          />
          <label for="44">Plusieurs fois par semaine <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q15"
            id="45"
            value="2"
            v-model="picked12"
            required
          />
          <label for="45">Une fois par mois <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q15"
            id="46"
            value="3"
            v-model="picked12"
            required
          />
          <label for="46">Une fois par an <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q15"
            id="47"
            value="4"
            v-model="picked12"
            required
          />
          <label for="47">Jamais <span></span></label>
        </div>
      </div>
      <div class="c-form__group">
        <p class="col-12 c-form__question">Question 12</p>
        <p class="col-12 c-form__title">Comment fais-tu ta vaisselle ?</p>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q16"
            id="48"
            value="1"
            v-model="picked13"
            required
          />
          <label for="48">Avec un lave vaiselle <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q16"
            id="49"
            value="2"
            v-model="picked13"
            required
          />
          <label for="49">A la main <span></span></label>
        </div>
      </div>
    </div>
    <div class="col-2 d-flex align-items-end">
      <nuxt-link class="c-form__btn" to="/formulaire-result">Suivant</nuxt-link>
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
      picked11: 0,
      picked12: 0,
      picked13: 0,
    }
  },
  watch: {
    picked11() {
      this.$emit(
        'child-total4',
        parseInt(this.picked11) +
          parseInt(this.picked12) +
          parseInt(this.picked13)
      )
    },
    picked12() {
      this.$emit(
        'child-total4',
        parseInt(this.picked11) +
          parseInt(this.picked12) +
          parseInt(this.picked13)
      )
    },
    picked13() {
      this.$emit(
        'child-total4',
        parseInt(this.picked11) +
          parseInt(this.picked12) +
          parseInt(this.picked13)
      )
    },
  },
}
</script>
