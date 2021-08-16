<template>
  <div class="modal" :class="{ 'modal--open': modal }">
    <div class="modal__overlay" @click.prevent.stop="closeModal">
      <div class="modal__content">
        <div class="modal__header">
          <span type="button" class="close" @click="closeModal()">
            <span aria-hidden="true">&times;</span>
          </span>
        </div>
        <div class="modal__body">
          <nuxt-content :document="modalContent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppModal',
  computed: {
    ...mapGetters(['modal', 'modalContent']),
  },
  methods: {
    ...mapActions(['closeModal']),
  },
}
</script>

<style lang="scss">
@keyframes enter {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
.modal {
  $this: &;
  &--open {
    #{$this}__overlay {
      inset: 0;
    }
    #{$this}__content {
      display: block;
      animation: enter 0.3s ease-in-out;
    }
  }
  &__overlay {
    position: absolute;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);
  }
  &__content {
    display: none;
    position: absolute;
    min-width: 320px;
    max-width: 360px;
    padding: 16px 32px;
    top: 0;
    right: 0;
    bottom: 0;

    background-color: #fff;
    background-image: url('@/assets/img/modal-bg.svg');
    background-size: fill;
  }
  &__header {
    display: flex;
    justify-content: flex-end;
    font-size: 32px;
    color: grey;

    span {
      cursor: pointer;
    }
  }
}

.nuxt-content {
  h1 {
    color: #50807c;
    &:not(:first-child) {
      margin-top: 24px;
      color: #fbc56d;
    }
  }

  ul {
    margin: 0;
    padding-left: 0px;
    list-style-type: none;
    li {
      &:before {
        content: '- ';
      }
    }
  }
}
</style>
