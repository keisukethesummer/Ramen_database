<template>
  <div>
    <div class="add_shop_title">
      店舗を登録
    </div>

    <!-- フォーム -->
    <div class="add_shop_form_container">
      <v-form class="add_shop_form">
        <!-- 店舗名 -->
        <div class="add_shop_name_container">
          <div class="add_shop_name_label">
            店舗名
          </div>
          <div class="add_shop_name_required" id="required">
            必須
          </div>
          <div class="add_shop_name_form">
            <v-text-field
              v-model="shop_name"
              placeholder="例: 来来亭"
              :counter="10"
              hide-details
            ></v-text-field>
          </div>
        </div>
        <!-- 郵便番号 -->
        <div class="add_shop_post_number_container">
          <div class="add_shop_post_number_label">
            郵便番号
          </div>
          <div class="add_shop_post_number_form">
            <v-text-field
              v-model="post_number"
              placeholder="例: 520-0000"
            ></v-text-field>
          </div>
        </div>
        <!-- 住所 -->
        <div class="add_shop_address_container">
          <div class="add_shop_address_label">
            住所
          </div>
          <div class="add_shop_address_required" id="required">
            必須
          </div>
          <div class="add_shop_address_form">
            <v-text-field
              v-model="shop_address"
              hide-details
            ></v-text-field>
          </div>
        </div>
        <!-- 営業時間 -->
        <div class="add_shop_opening_hours_container">
          <!-- ラベル -->
          <div class="add_shop_opening_hours_label">
            営業時間
          </div>
          <!-- 曜日タブ -->
          <div class="add_shop_opening_hours_day_tabs_container">

            <v-tabs v-model="tab" class="add_shop_opening_hours_day_tabs">
              <v-tab class="add_shop_opening_hours_day_tab">月</v-tab>
              <v-tab class="add_shop_opening_hours_day_tab">火</v-tab>
              <v-tab class="add_shop_opening_hours_day_tab">水</v-tab>
              <v-tab class="add_shop_opening_hours_day_tab">木</v-tab>
              <v-tab class="add_shop_opening_hours_day_tab">金</v-tab>
              <v-tab class="add_shop_opening_hours_day_tab">土</v-tab>
              <v-tab class="add_shop_opening_hours_day_tab">日</v-tab>
            </v-tabs>
          </div>
          <div>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card v-if="0 == tab">
                  <!-- 定休日 -->
                  <div class="add_shop_opening_hours_holiday_check">
                    <v-checkbox 
                      label="定休日"
                      v-model="mon_closed">
                    </v-checkbox>
                  </div>
                  <!-- 営業開始・終了時刻 -->
                  <div v-if="!mon_closed" class="add_shop_opening_hours">
                    <!-- 営業開始時刻 -->
                    <div class="add_shop_opening_hours_open_hour">
                      <v-select
                        :items="hours"
                        value="00"
                        v-model="mon_open_hour"
                      ></v-select>
                    </div>
                    <span>:</span>
                    <div class="add_shop_opening_hours_open_minutes">
                      <v-select
                        :items="minutes"
                        value="00"
                        v-model="mon_open_minutes"
                      ></v-select>
                    </div>
                    <span>〜</span>
                    <!-- 営業終了時刻 -->
                    <div class="add_shop_opening_hours_close_hour">
                      <v-select
                        :items="hours"
                        value="00"
                        v-model="mon_close_hour"
                      ></v-select>
                    </div>
                    <span>:</span>
                    <div class="add_shop_opening_hours_close_minutes">
                      <v-select
                        :items="minutes"
                        value="00"
                        v-model="mon_close_minutes"
                      ></v-select>
                    </div>
                  </div>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card v-if="1 == tab">
                  <!-- 定休日 -->
                  <div class="add_shop_opening_hours_holiday_check">
                    <v-checkbox
                      label="定休日"
                      v-model="tue_closed">
                    </v-checkbox>
                  </div>
                  <!-- 営業開始・終了時刻 -->
                  <div v-if="!tue_closed" class="add_shop_opening_hours">
                    <!-- 営業開始時刻 -->
                    <div class="add_shop_opening_hours_open_hour">
                      <v-select
                        :items="hours"
                        value="00"
                        v-model="tue_open_hour"
                      ></v-select>
                    </div>
                    <span>:</span>
                    <div class="add_shop_opening_hours_open_minutes">
                      <v-select
                        :items="minutes"
                        value="00"
                        v-model="tue_open_minutes"
                      ></v-select>
                    </div>
                    <span>〜</span>
                    <!-- 営業終了時刻 -->
                    <div class="add_shop_opening_hours_close_hour">
                      <v-select
                        :items="hours"
                        value="00"
                        v-model="tue_close_hour"
                      ></v-select>
                    </div>
                    <span>:</span>
                    <div class="add_shop_opening_hours_close_minutes">
                      <v-select
                        :items="minutes"
                        value="00"
                        v-model="tue_close_minutes"
                      ></v-select>
                    </div>
                  </div>
                </v-card>
              </v-tab-item>

              <!-- 水曜 -->
              <v-tab-item>
                <v-card v-if="2 == tab">
                  <!-- 定休日 -->
                  <div class="add_shop_opening_hours_holiday_check">
                    <v-checkbox
                      label="定休日"
                      v-model="wed_closed">
                    </v-checkbox>
                  </div>
                  <!-- 営業開始・終了時刻 -->
                  <div v-if="!wed_closed" class="add_shop_opening_hours">
                    <!-- 営業開始時刻 -->
                    <div class="add_shop_opening_hours_open_hour">
                      <v-select
                        :items="hours"
                        value="00"
                        v-model="wed_open_hour"
                      ></v-select>
                    </div>
                    <span>:</span>
                    <div class="add_shop_opening_hours_open_minutes">
                      <v-select
                        :items="minutes"
                        value="00"
                        v-model="wed_open_minutes"
                      ></v-select>
                    </div>
                    <span>〜</span>
                    <!-- 営業終了時刻 -->
                    <div class="add_shop_opening_hours_close_hour">
                      <v-select
                        :items="hours"
                        value="00"
                        v-model="wed_close_hour"
                      ></v-select>
                    </div>
                    <span>:</span>
                    <div class="add_shop_opening_hours_close_minutes">
                      <v-select
                        :items="minutes"
                        value="00"
                        v-model="wed_close_minutes"
                      ></v-select>
                    </div>
                  </div>
                </v-card>
              </v-tab-item>
              <!-- 木曜 -->
              <v-tab-item>
                <v-card v-if="3 == tab">
                  <!-- 定休日 -->
                  <div class="add_shop_opening_hours_holiday_check">
                    <v-checkbox
                      label="定休日"
                      v-model="thu_closed">
                    </v-checkbox>
                  </div>
                  <!-- 営業開始・終了時刻 -->
                  <div v-if="!thu_closed" class="add_shop_opening_hours">
                    <!-- 営業開始時刻 -->
                    <div class="add_shop_opening_hours_open_hour">
                      <v-select
                        :items="hours"
                        value="00"
                        v-model="thu_open_hour"
                      ></v-select>
                    </div>
                    <span>:</span>
                    <div class="add_shop_opening_hours_open_minutes">
                      <v-select
                        :items="minutes"
                        value="00"
                        v-model="thu_open_minutes"
                      ></v-select>
                    </div>
                    <span>〜</span>
                    <!-- 営業終了時刻 -->
                    <div class="add_shop_opening_hours_close_hour">
                      <v-select
                        :items="hours"
                        value="00"
                        v-model="thu_close_hour"
                      ></v-select>
                    </div>
                    <span>:</span>
                    <div class="add_shop_opening_hours_close_minutes">
                      <v-select
                        :items="minutes"
                        value="00"
                        v-model="thu_close_minutes"
                      ></v-select>
                    </div>
                  </div>
                </v-card>
              </v-tab-item>
              <!-- 金曜 -->
              <v-tab-item>
                <v-card v-if="4 == tab">
                  <!-- 定休日 -->
                  <div class="add_shop_opening_hours_holiday_check">
                    <v-checkbox
                      label="定休日"
                      v-model="fri_closed">
                    </v-checkbox>
                  </div>
                  <!-- 営業開始・終了時刻 -->
                  <div v-if="!fri_closed" class="add_shop_opening_hours">
                    <!-- 営業開始時刻 -->
                    <div class="add_shop_opening_hours_open_hour">
                      <v-select
                        :items="hours"
                        value="00"
                        v-model="fri_open_hour"
                      ></v-select>
                    </div>
                    <span>:</span>
                    <div class="add_shop_opening_hours_open_minutes">
                      <v-select
                        :items="minutes"
                        value="00"
                        v-model="fri_open_minutes"
                      ></v-select>
                    </div>
                    <span>〜</span>
                    <!-- 営業終了時刻 -->
                    <div class="add_shop_opening_hours_close_hour">
                      <v-select
                        :items="hours"
                        value="00"
                        v-model="fri_close_hour"
                      ></v-select>
                    </div>
                    <span>:</span>
                    <div class="add_shop_opening_hours_close_minutes">
                      <v-select
                        :items="minutes"
                        value="00"
                        v-model="fri_close_minutes"
                      ></v-select>
                    </div>
                  </div>
                </v-card>
              </v-tab-item>
              <!-- 土曜 -->
              <v-tab-item>
                <v-card v-if="5 == tab">
                  <!-- 定休日 -->
                  <div class="add_shop_opening_hours_holiday_check">
                    <v-checkbox
                      label="定休日"
                      v-model="sat_closed">
                    </v-checkbox>
                  </div>
                  <!-- 営業開始・終了時刻 -->
                  <div v-if="!sat_closed" class="add_shop_opening_hours">
                    <!-- 営業開始時刻 -->
                    <div class="add_shop_opening_hours_open_hour">
                      <v-select
                        :items="hours"
                        value="00"
                        v-model="sat_open_hour"
                      ></v-select>
                    </div>
                    <span>:</span>
                    <div class="add_shop_opening_hours_open_minutes">
                      <v-select
                        :items="minutes"
                        value="00"
                        v-model="sat_open_minutes"
                      ></v-select>
                    </div>
                    <span>〜</span>
                    <!-- 営業終了時刻 -->
                    <div class="add_shop_opening_hours_close_hour">
                      <v-select
                        :items="hours"
                        value="00"
                        v-model="sat_close_hour"
                      ></v-select>
                    </div>
                    <span>:</span>
                    <div class="add_shop_opening_hours_close_minutes">
                      <v-select
                        :items="minutes"
                        value="00"
                        v-model="sat_close_minutes"
                      ></v-select>
                    </div>
                  </div>
                </v-card>
              </v-tab-item>
              <!-- 日曜 -->
              <v-tab-item>
                <v-card v-if="6 == tab">
                  <!-- 定休日 -->
                  <div class="add_shop_opening_hours_holiday_check">
                    <v-checkbox
                      label="定休日"
                      v-model="sun_closed">
                    </v-checkbox>
                  </div>
                  <!-- 営業開始・終了時刻 -->
                  <div v-if="!sun_closed" class="add_shop_opening_hours">
                    <!-- 営業開始時刻 -->
                    <div class="add_shop_opening_hours_open_hour">
                      <v-select
                        :items="hours"
                        value="00"
                        v-model="sun_open_hour"
                      ></v-select>
                    </div>
                    <span>:</span>
                    <div class="add_shop_opening_hours_open_minutes">
                      <v-select
                        :items="minutes"
                        value="00"
                        v-model="sun_open_minutes"
                      ></v-select>
                    </div>
                    <span>〜</span>
                    <!-- 営業終了時刻 -->
                    <div class="add_shop_opening_hours_close_hour">
                      <v-select
                        :items="hours"
                        value="00"
                        v-model="sun_close_hour"
                      ></v-select>
                    </div>
                    <span>:</span>
                    <div class="add_shop_opening_hours_close_minutes">
                      <v-select
                        :items="minutes"
                        value="00"
                        v-model="sun_close_minutes"
                      ></v-select>
                    </div>
                  </div>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </div>

        <!-- アクセス情報 -->
        <div class="add_shop_access_container">
          <div class="add_shop_access_label">
            アクセス
          </div>
          <div class="add_shop_access_form">
            <v-textarea
              v-model="add_shop_access"
              hide-details
            ></v-textarea>
          </div>
        </div>
        <!-- webサイト・SNSリンク -->
        <div class="add_shop_link_container">
          <div class="add_shop_link_label">
            Webサイト・SNSリンク
          </div>
          <div class="add_shop_link_label">
            <v-text-field
              v-model="email"
              hide-details
            ></v-text-field>
          </div>
        </div>
        <!-- 写真 -->
        <!-- <div class="image">
          <v-text-field
            v-model="email"
            label="写真"
            hide-details
          ></v-text-field>
        </div> -->
      </v-form>
    </div>

    <!-- 登録ボタン -->
    <div class="add_btn_container">
      <v-btn
        class="add_btn"
        @click="submitForm()">
        店舗を登録する
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

/* 店舗名 */
const shop_name = ref("");
/* 郵便番号 */
const post_number = ref("");
/* 住所 */
const shop_address = ref("");
/* 選択されているタブのインデックス */
const tab = ref(0);     /* 初期状態は月曜 */
/* 時間プルダウン */
const hours = ref(Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'))); /* padStart(2, '0'): 2桁にフォーマット */
const minutes = ref(Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')));
/* 各曜日の営業時間データ */
const mon_closed =ref(false);
const mon_open_hour = ref("00");
const mon_open_minutes = ref("00");
const mon_close_hour = ref("00");
const mon_close_minutes = ref("00");
const tue_closed = ref(false);
const tue_open_hour = ref("00");
const tue_open_minutes = ref("00");
const tue_close_hour = ref("00");
const tue_close_minutes = ref("00");
const wed_closed = ref(false);
const wed_open_hour = ref("00");
const wed_open_minutes = ref("00");
const wed_close_hour = ref("00");
const wed_close_minutes = ref("00");
const thu_closed = ref(false);
const thu_open_hour = ref("00");
const thu_open_minutes = ref("00");
const thu_close_hour = ref("00");
const thu_close_minutes = ref("00");
const fri_closed = ref(false);
const fri_open_hour = ref("00");
const fri_open_minutes = ref("00");
const fri_close_hour = ref("00");
const fri_close_minutes = ref("00");
const sat_closed = ref(false);
const sat_open_hour = ref("00");
const sat_open_minutes = ref("00");
const sat_close_hour = ref("00");
const sat_close_minutes = ref("00");
const sun_closed = ref(false);
const sun_open_hour = ref("00");
const sun_open_minutes = ref("00");
const sun_close_hour = ref("00");
const sun_close_minutes = ref("00");

</script>

<style scoped>
.add_btn_container {
  display: flex;
  justify-content: center;
}
.add_btn {
  height: 60px !important;
  width: 200px;
  background: blue;
  color: white;
  font-weight: bold;
  font-size: 20px;
  position: fixed;
  bottom: 20px;
  z-index: 999;
}
</style>