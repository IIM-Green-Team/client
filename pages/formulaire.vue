<template>
  <div>
    <page-title title="Votre note green" sub-title="" />
    <div class="formulaire-intro col-8">
      <p>
        Bravo vous êtes arrivés à la fin de notre parcours ! Maintenant que vous
        avez ces données en tête, voyons voir à quel point vous êtes investis
        dans le zéro déchet !
      </p>
      <br />
      <p>
        Le but de ce questionnaire est de savoir si vous avez un mode de vie
        sain pour l’environnement. À la fin de celui-ci, vous aurez, une note
        “green” qui vous permettra de faire un premier état des lieux de vos
        habitudes pour savoir si vous êtes un exemple parfait pour nos citoyens
        ou que vous avez besoin un peu plus d’efforts pour atteindre votre
        objectif !
      </p>
      <br />
      <p>Alors, êtes vous prêts ? C’est parti !</p>
      <br />
      <br />
      <nuxt-link class="c-form__btn" to="/formulaire-step-1">Suivant</nuxt-link>
    </div>
  </div>
</template>

<script>
import stepper from '@/mixins/stepper'
import transition from '@/utils/pageTranstion'
import tipContent from '@/mixins/tipContent'

export default {
  mixins: [stepper('formulaire'), tipContent('formulaire')],
  transition,
}
</script>

<style lang="scss">
.formulaire-intro {
  margin-top: 50px;
  margin-left: 60px;
  color: $color-blackgrey;
}
</style>
