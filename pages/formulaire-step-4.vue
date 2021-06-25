<template>
  <div class="page-formulaire">
    <div class="col-2">step</div>

    <div class="c-form col-8">
      <div v-for="question in questions" :key="question.id">
        <div class="c-form__group">
          <p class="col-12 c-form__question">Question {{ question.id }}</p>
          <p class="col-12 c-form__title">{{ question.name }}</p>
          <div v-for="value in question.values" :key="value.id">
            <div class="c-form__group--radio">
              <input
                :id="value.id"
                class="radio"
                :value="value.note"
                type="radio"
                :name="question.id"
                required
                @change="onInputChange"
              />
              <label :for="value.id">{{ value.text }} <span></span> </label>
            </div>
          </div>
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
import { mapActions } from 'vuex'

export default {
  mixins: [stepper('')],
  data() {
    return {
      transition,
      questions: [
        {
          id: 11,
          name: 'Quelle est la durée moyenne de vos douches ?',
          values: [
            { text: 'inférieur à 5 min', id: 33, note: 1 },
            { text: 'environ 10 min', id: 34, note: 2 },
            { text: 'environ 15 min', id: 35, note: 3 },
            { text: 'Plus de 20 min', id: 36, note: 4 },
          ],
        },
        {
          id: 12,
          name: 'Faites-vous du compostage ?',
          values: [
            { text: 'Plusieurs fois par semaine', id: 37, note: 1 },
            { text: 'Une fois par mois', id: 38, note: 2 },
            { text: 'Une fois par an', id: 39, note: 3 },
            { text: 'Jamais', id: 40, note: 4 },
          ],
        },
        {
          id: 13,
          name: 'Comment te rends tu au travail/école ?',
          values: [
            { text: 'Avec un lave vaiselle', id: 41, note: 1 },
            { text: 'A la main', id: 42, note: 2 },
          ],
        },
      ],
    }
  },
  methods: {
    ...mapActions(['updateQuestionScore']),
    onInputChange(e) {
      this.updateQuestionScore({ id: +e.target.name, value: +e.target.value })
    },
  },
}
</script>
