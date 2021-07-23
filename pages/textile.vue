<template>
  <div>
    <page-title
      title="Textile"
      sub-title="Notre impact sur l’environnement à  travers le textile"
    />
    <div class="textile">
      <div class="col-3">
        <div
          style="margin-top: 100px"
          class="textile__col d-flex flex-column align-items-center justify-content-center"
        >
          <div class="textile__data">
            <span>285 x </span>
            <img :src="shower" alt="shower" />
          </div>
        </div>
      </div>
      <img class="img-person" :src="person" alt="person" />
      <div class="col-3">
        <div class="textile__col d-flex flex-column justify-content-between">
          <div class="textile__data">
            <span>70 x </span>
            <img :src="shower" alt="shower" />
          </div>
          <div class="textile__data">
            <span>150 x </span>
            <p>
              opérations nécessitant des dizaines de composants chimiques et de
              matériaux polluants
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import transition from '@/utils/pageTranstion'
import stepper from '@/mixins/stepper'
import person from '../assets/img/person.svg'
import shower from '../assets/img/shower.svg'

export default {
  mixins: [stepper('textile')],
  data() {
    return {
      transition,
      person,
      shower,
    }
  },
}
</script>

<style lang="scss">
.textile {
  width: 100%;
  display: flex;
  justify-content: center;

  &__col {
    height: 100%;
  }

  &__data {
    display: flex;

    span {
      display: block;
      white-space: nowrap;
      margin-right: 10px;
      font-size: 2rem;
      font-weight: bold;
      color: $color-yellow;
    }

    p {
      font-size: 14px;
      color: $color-grey;
    }

    img {
      width: 40px;
    }
  }

  .img-person {
    display: block;
    height: 420px;
    width: 300px;
  }
}
</style>
