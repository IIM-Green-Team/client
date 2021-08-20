<template>
  <div class="page-formulaire">
    <div class="col-2">Etape 1</div>

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
      <nuxt-link class="c-form__btn" to="/formulaire-step-2">Suivant</nuxt-link>
    </div>
  </div>
</template>

<script>
import transition from '@/utils/pageTranstion'
import stepper from '@/mixins/stepper'
import { mapActions } from 'vuex'

export default {
  mixins: [stepper('formulaire-step-1')],
  transition,
  data() {
    return {
      questions: [
        {
          id: 1,
          name: 'Achètes-tu uniquement du bio ?',
          values: [
            { text: 'Jamais', id: 1, note: 1 },
            { text: '1 repas sur 2', id: 2, note: 2 },
            { text: 'Tous les repas', id: 3, note: 3 },
          ],
        },
        {
          id: 2,
          name: 'A quelle fréquence mangez-vous de la viande ou du poisson ?',
          values: [
            { text: 'Jamais', id: 4, note: 1 },
            { text: '1 repas sur 2', id: 5, note: 2 },
            { text: 'Tous les repas', id: 6, note: 3 },
          ],
        },
        {
          id: 3,
          name: 'A quelle fréquence consommez-vous des produits laitiers ?',
          values: [
            { text: 'Jamais', id: 7, note: 1 },
            { text: '1 repas sur 2', id: 8, note: 2 },
            { text: 'Tous les repas', id: 9, note: 3 },
          ],
        },
        {
          id: 4,
          name: 'À quelle fréquence jetez-vous de la nourriture ?',
          values: [
            { text: 'Plusieurs fois par semaine', id: 10, note: 1 },
            { text: 'De temps en temps', id: 11, note: 2 },
            { text: 'Presque jamais', id: 12, note: 3 },
          ],
        },
      ],
    }
  },
  methods: {
    ...mapActions(['updateQuestionScore']),
    onInputChange(e) {
      console.log({ value: +e.target.value, id: +e.target.name })
      this.updateQuestionScore({ id: +e.target.name, value: +e.target.value })
    },
  },
}
</script>
