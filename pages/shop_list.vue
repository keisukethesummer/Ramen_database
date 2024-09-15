<template>
  <div>
    <div class="shop_list_container">
      <v-card
        v-for="shop in shop_list"
        :key="shop.id"
        class="shop_cards">
        <!-- 店舗名 -->
        <div  class="shop_name">

        </div>
        <!-- 住所 -->
        <div class="shop_address">
          {{shop.name}}
        </div>
        <!-- 営業時間 -->
        <div class="opening_hours">
        </div>
        <!-- アクセス情報 -->
        <div class="shop_access"></div>
        <!-- webサイト・SNSリンク -->
        <div class="shop_web_link"></div>
        <!-- 写真 -->
        <div class="shop_images"></div>

      </v-card>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const shop_list = ref([
  {
  "shop_name": "ラーメン太郎",
  "address": "東京都渋谷区1-2-3",
  "phone_number": "03-1234-5678",
  "opening_hours": "11:00-22:00",
  "access": "渋谷駅から徒歩5分",
  "website": "https://ramen-taro.jp",
  }
])
</script>