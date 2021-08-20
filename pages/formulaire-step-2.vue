<template>
  <div class="page-formulaire">
    <div class="col-2">Etape 2</div>

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
      <nuxt-link class="c-form__btn" to="/formulaire-step-3">Suivant</nuxt-link>
    </div>
  </div>
</template>

<script>
import transition from '@/utils/pageTranstion'
import stepper from '@/mixins/stepper'
import { mapActions } from 'vuex'

export default {
  mixins: [stepper('formulaire-step-2')],
  transition,
  data() {
    return {
      questions: [
        {
          id: 5,
          name: 'À quelle fréquence achetez-vous vos vêtements ?',
          values: [
            { text: 'Plusieurs fois par semaine', id: 13, note: 1 },
            { text: 'Une fois par mois', id: 14, note: 2 },
            { text: 'Une fois par an', id: 15, note: 3 },
            { text: 'Jamais', id: 16, note: 4 },
          ],
        },
        {
          id: 6,
          name: 'À quelle fréquence jetez-vous vos vêtements ?',
          values: [
            { text: 'Plusieurs fois par semaine', id: 17, note: 1 },
            { text: 'Une fois par mois', id: 18, note: 2 },
            { text: 'Une fois par an', id: 19, note: 3 },
            { text: 'Jamais', id: 20, note: 4 },
          ],
        },
        {
          id: 7,
          name: 'Où achetez-vous vos vétements ?',
          values: [
            { text: 'Magasin (Zara, H&M etc..)', id: 21, note: 1 },
            { text: 'En ligne (Asos)', id: 22, note: 2 },
            { text: 'Site de revente (Vinted)', id: 23, note: 3 },
            { text: 'Friperie', id: 24, note: 4 },
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
