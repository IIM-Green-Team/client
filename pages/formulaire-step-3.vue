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
      <nuxt-link class="c-form__btn" to="/formulaire-step-4">Suivant</nuxt-link>
    </div>
  </div>
</template>

<script>
import transition from '@/utils/pageTranstion'
import stepper from '@/mixins/stepper'
import { mapActions } from 'vuex'

export default {
  mixins: [stepper('formulaire-step-3')],
  transition,
  data() {
    return {
      questions: [
        {
          id: 8,
          name: 'Faites-vous du trie',
          values: [
            { text: 'Oui', id: 25, note: 1 },
            { text: 'Non', id: 26, note: 2 },
          ],
        },
        {
          id: 9,
          name: 'Faites-vous du compostage ?',
          values: [
            { text: 'Oui', id: 27, note: 1 },
            { text: 'Non', id: 28, note: 2 },
          ],
        },
        {
          id: 10,
          name: 'Comment te rends tu au travail/école ?',
          values: [
            { text: 'Pied / Vélo', id: 29, note: 1 },
            { text: 'Trotinette/Vélo électrique', id: 30, note: 2 },
            { text: 'Transport en commun', id: 31, note: 3 },
            { text: 'Voiture', id: 32, note: 4 },
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
