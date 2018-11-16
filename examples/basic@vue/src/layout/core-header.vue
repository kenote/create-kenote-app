<template>
  <div class="layout-header">
    <div class="logo">
      <img :src="logo" />
    </div>
    <div class="nav">
      <ul>
        <li :class="activeClassName('/')"><router-link to="/" >Home</router-link></li>
        <li :class="activeClassName('/about')"><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as Images from '../assets/images'
import * as utils from '../utils'


export default {
  data () {
    return {
      logo: utils.assetUrl(Images.logo)
    }
  },
  mounted () {
    
  },
  methods: {
    activeClassName (linkname) {
      return utils.isActiveLink(linkname, this.$router.history.current.path) ? 'active' : ''
    }
  }
}
</script>

<style lang="scss">
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
