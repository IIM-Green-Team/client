<template>
  <div
    style="margin-top: 50px"
    class="u-flex justify-content-center align-items-center"
  >
    <div class="col-10">
      <page-title title="Résultats" sub-title="" />
      <h2 class="h2 note-result">{{ score }} / 42</h2>
      <div class="note-details">
        <p v-if="score < 15">
          Aïe... le zéro déchet ne semble pas être votre priorité. Redoublez
          d’efforts en lisant nos astuces et appliquez-les petit à petit dans
          votre quotidien.
        </p>
        <p v-if="score > 16 && score < 30">
          Pas mal ! Mais vous pouvez mieux faire pour atteindre un mode de vie
          plus sain pour l’environnement. Assurez-vous d’avoir bien appliquer
          nos astuces dans votre quotidien.
        </p>
        <p v-if="score > 36">
          Bravo ! Vous êtes un bon exemple d’un mode de vie sain pour
          l’environnement. Continuez à préserver et n’oubliez pas d’en parler
          autour de vous en partageant notre site par exemple.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import transition from '@/utils/pageTranstion'
import stepper from '@/mixins/stepper'
import { mapGetters } from 'vuex'
import tipContent from '@/mixins/tipContent'

export default {
  mixins: [stepper('formulaire-result'), tipContent('formulaire-result')],
  transition,
  data() {
    return {
      transition,
    }
  },

  computed: {
    ...mapGetters(['currentQuestions']),
    score() {
      return Object.values(this.currentQuestions).reduce((a, c) => +a + +c, 0)
    },
  },
}
</script>

<style lang="scss">
.note-result {
  font-size: 3rem;
  margin-top: 100px;
  text-align: center;
  color: $color-green;
}

.note-details {
  margin-left: 60px;
  color: $color-blackgrey;
}
</style>
