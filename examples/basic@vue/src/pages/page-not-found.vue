<template>
  <div class="layout-page-not-found">
    <div class="page-not-found">
      <h1>{{ code }}</h1>
      <div>
        <h2>{{ status }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: 404,
      status: 'This page could not be found.'
    }
  }
}
</script>

<style lang="scss" >
.layout-page-not-found {
  color: #000;
  background: #fff;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .page-not-found {
    font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;

    h1 {
      display: inline-block;
      border-right: 1px solid rgba(0, 0, 0,.3);
      margin: 0;
      margin-right: 20px;
      padding: 10px 23px 10px 0;
      font-size: 24px;
      font-weight: 500;
      vertical-align: top;
    }

    div {
      display: inline-block;
      text-align: left;
      line-height: 49px;
      height: 49px;
      vertical-align: middle;

      h2 {
        font-size: 14px;
        font-weight: normal;
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>
