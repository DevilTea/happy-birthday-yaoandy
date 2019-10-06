<template>
  <div id="app">
    <div class="card">
      <div class="card-inner">
        <div class="card-content">
          <div style="font-size: 1.5rem; font-weight: 500">Hi, 韋神</div>
          <p style="margin-top: 32px; padding-left: 16px; line-height: 1.5rem;">
            很高興你又生日了，看著你一天一天的成長茁壯我真的倍感欣慰，看到你交到了女朋友讓我非常感動，韋神也長大了啊，我心中這樣感嘆道。看到這裡你一定跟我有一樣的想法吧，就是我到底在供三小ㄏㄏㄏ，其實我只是想跟你說生日快樂，很高興能有你這個朋友，其實我早就把你當做摯友了哈哈哈～祝你事事順心、生日快樂！
          </p>
          <div style="text-align: right;">DevilTea</div>
        </div>
      </div>
    </div>
    <div class="flip-card" :class="{ flipped }" @click="flipped = !flipped">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="cake.gif" style="display: block; width: 300px; height: 300px;" />
          <div>Happy Birthday</div>
        </div>
        <div class="flip-card-back">
          <img src="0.jpg" style="display: block;  width: 250px; height: auto; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      flipped: false
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  line-height: 1rem;
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: relative;

  .flip-card,
  .card {
    width: 600px;
    height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .flip-card-inner,
    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;

      .flip-card-front,
      .flip-card-back,
      .card-content {
        position: absolute;
        background-color: rgb(255, 154, 169);
        right: 0;
        width: 50%;
        height: 100%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      }
    }
  }

  .flip-card {
    background-color: transparent;
    perspective: 1000px;

    .flip-card-inner {
      text-align: center;
      transition: transform 0.6s;
      transform-style: preserve-3d;

      .flip-card-front,
      .flip-card-back {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        backface-visibility: hidden;
      }

      .flip-card-front {
        font-size: 2rem;
        font-weight: bold;
        color: white;
      }

      .flip-card-back {
        color: white;
        transform: rotateY(180deg);
      }
    }

    &.flipped .flip-card-inner {
      transform: rotateY(-180deg);
    }
  }

  .card {
    .card-inner {
      .card-content {
        padding: 32px;
        color: white;

      }
    }
  }
}
</style>
