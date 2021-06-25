<template>
  <div
    style="margin-top: 50px"
    class="u-flex justify-content-center align-items-center"
  >
    <div class="col-10">
      <page-title title="Résultats" sub-title="" />
      <h2 class="h2 note-result">{{ totalAll }} / 42</h2>
      <div class="note-details">
        <!-- <p>
        Aïe... le zéro déchet ne semble pas être votre priorité. Redoublez
        d’efforts en lisant nos astuces et appliquez-les petit à petit dans
        votre quotidien.
      </p> -->
        <p>
          Pas mal ! Mais vous pouvez mieux faire pour atteindre un mode de vie
          plus sain pour l’environnement. Assurez-vous d’avoir bien appliquer
          nos astuces dans votre quotidien.
        </p>
        <!-- <p>
        Bravo ! Vous êtes un bon exemple d’un mode de vie sain pour
        l’environnement. Continuez à préserver et n’oubliez pas d’en parler
        autour de vous en partageant notre site par exemple.
      </p> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.note-result {
  margin-top: 100px;
  text-align: center;
  color: $color-red;
}

.note-details {
  color: $color-blackgrey;
}
</style>
