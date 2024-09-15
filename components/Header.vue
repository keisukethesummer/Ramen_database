<template>
  <div class="header">
    <!-- ハンバーガーメニュー -->
    <div class="menu">
      <v-btn icon @click="toggleMenu">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
    <!-- タイトル -->
    <div class="image_container">
      <img src="../public/images/23401625.jpg" alt="Header Image" class="image">
    </div>
    <!-- 検索ボタン -->
    <div class="search">
      <v-btn icon @click="openSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.header {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: lemonchiffon;
  margin-bottom: 5px;
}

.image_container {
  height: 48px;
  width: 48px;
}

.image {
  object-fit: cover; /* 画像の左右をトリミング */
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
</style>
