<template>
  <nav>
    <ul>
      <li v-for="(step, index) in steps" :key="index">
        <nuxt-link
          class="nav-link"
          :class="{
            'is-small': step.issubpage,
            'is-active': currentProgression >= index,
          }"
          :to="step.route"
          :title="step.name"
        ></nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import steps from '@/static/steps.js'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['currentProgression']),
    steps() {
      return steps
    },
  },
}
</script>

<style lang="scss">
$nav-padding: 10px;
nav {
  position: relative;
  ul {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }

  li {
    padding: 0 $nav-padding;
    list-style: none;
    background: inherit;
  }
  &::before {
    content: '';
    position: absolute;
    height: 1px;
    left: $nav-padding;
    right: $nav-padding;
    top: 50%;

    background-color: $color-black;
  }

  .nav-link {
    position: relative;
    display: block;
    width: 20px;
    height: 20px;

    border: solid 2px $color-black;
    border-radius: 50%;
    background-color: $color-white;

    &:hover {
      cursor: pointer;
    }

    &.is-active {
      position: relative;

      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: '';
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: $color-green;
      }
    }

    &.is-small {
      display: block;
      margin-top: 2px;
      width: 16px;
      height: 16px;

      &::before {
        width: 11px;
        height: 11px;
      }
    }
  }
}
</style>
