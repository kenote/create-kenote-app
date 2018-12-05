<template>
  <div class="layout-header">
    <div class="logo">
      <img src="~/assets/images/logo.png" />
    </div>
    <div class="nav">
      <ul>
        <li v-for="nav in navs" :key="nav.key" :class="activeClassName(nav.link, context)">
          <nuxt-link :to="nav.link">{{ nav.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import { Prop } from 'vue-property-decorator'

interface HeaderData {
  context: string
}

interface NavItem {
  key: string | number
  name: string
  link: string
}

@Component({
  watch: {
    $route () {
      this.updateContext()
    }
  }
})
export default class  extends Vue {

  @Prop({ default: [] }) navs: Array<NavItem>

  data (): HeaderData {
    return {
      context: '/'
    }
  }
  
  mounted () {
    this.updateContext()
    console.log(this.$props)
  }

  updateContext (): void {
    let routeMatch: RegExpMatchArray = this.$parent['$route'].path.match(/^(\/)([a-zA-Z\d\_\-]*)/) || ['/']
    this.$data.context = routeMatch[0]
  }

  activeClassName = (linkname: string, context: string): string => linkname === context ? 'active' : ''
}
</script>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  padding: 150px 20px 80px;

  .logo {
    max-width: 400px;
    img {
      max-width: inherit;
    }
  }

  .nav {
    margin-top: 50px;

    ul {
      list-style-type: none;
      padding: 0;
      display: flex;

      li {
        margin: 0 15px;
        font-size: 14px;

        a {
          font-size: 1.5em;
          color: #343434;
          font-weight: bold;
          position: relative;

          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 3px;
            background: #ff8011;
            opacity: .2;
            transition: all .5s;
            bottom: -5px;
          }

          &:hover {
            &::after{
              left:0%;
              width:100%;
              opacity:.7
            }
          }
        }

        &.active a {
          color: #ff6633;
        }
      }
    }
  }
}
</style>
