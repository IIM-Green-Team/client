<template>
  <div class="page-formulaire">
    <div class="col-2">step</div>
    <div class="c-form col-8">
      <div class="c-form__group">
        <p class="col-12 c-form__question">Question 5</p>
        <p class="col-12 c-form__title">
          À quelle fréquence achetez-vous vos vêtements ?
        </p>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q5"
            id="13"
            value="1"
            v-model="picked5"
            required
          />
          <label for="13">Plusieurs fois par semaine <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q5"
            id="14"
            value="2"
            v-model="picked5"
            required
          />
          <label for="14">Une fois par mois <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q5"
            id="15"
            value="3"
            v-model="picked5"
            required
          />
          <label for="15">Une fois par an <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q5"
            id="16"
            value="4"
            v-model="picked5"
            required
          />
          <label for="16">Jamais <span></span></label>
        </div>
      </div>
      <div class="c-form__group">
        <p class="col-12 c-form__question">Question 6</p>
        <p class="col-12 c-form__title">
          À quelle fréquence jetez-vous vos vêtements ?
        </p>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q6"
            id="17"
            value="1"
            v-model="picked6"
            required
          />
          <label for="17">Plusieurs fois par semaine <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q6"
            id="18"
            value="2"
            v-model="picked6"
            required
          />
          <label for="18">Une fois par mois <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q6"
            id="19"
            value="3"
            v-model="picked6"
            required
          />
          <label for="19">Une fois par an <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q6"
            id="20"
            value="4"
            v-model="picked6"
            required
          />
          <label for="20">Jamais <span></span></label>
        </div>
      </div>
      <div class="c-form__group">
        <p class="col-12 c-form__question">Question 7</p>
        <p class="col-12 c-form__title">Où achetez-vous vos vétements ?</p>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q7"
            id="21"
            value="1"
            v-model="picked7"
            required
          />
          <label for="21">Magasin (Zara, H&M etc..) <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q7"
            id="22"
            value="2"
            v-model="picked7"
            required
          />
          <label for="22">En ligne (Asos) <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q7"
            id="23"
            value="3"
            v-model="picked7"
            required
          />
          <label for="23">Site de revente (Vinted) <span></span></label>
        </div>
        <div class="c-form__group--radio">
          <input
            class="radio"
            type="radio"
            name="q7"
            id="24"
            value="4"
            v-model="picked7"
            required
          />
          <label for="24">Friperie <span></span></label>
        </div>
      </div>
    </div>
    <div class="col-2 d-flex align-items-end">
      <nuxt-link class="c-form__btn" to="/formulaire-step-3">Suivant</nuxt-link>
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
      picked5: 0,
      picked6: 0,
      picked7: 0,
    }
  },
  watch: {
    picked5() {
      this.$emit(
        'child-total2',
        parseInt(this.picked5) + parseInt(this.picked6) + parseInt(this.picked7)
      )
    },
    picked6() {
      this.$emit(
        'child-total2',
        parseInt(this.picked5) + parseInt(this.picked6) + parseInt(this.picked7)
      )
    },
    picked7() {
      this.$emit(
        'child-total2',
        parseInt(this.picked5) + parseInt(this.picked6) + parseInt(this.picked7)
      )
    },
  },
}
</script>
