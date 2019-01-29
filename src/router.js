import Vue from "vue";
import VueRouter from "vue-router";

// ルート用のコンポーネントを読み込む
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";

//プラグインとして登録
Vue.use(VueRouter);

// VueRouterインスタンスを生成
const router = new VueRouter({
  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    { path: "/", component: Home },
    { path: "/Contact", component: Contact }
  ]
});

// 生成したVueRouterインスタンスをエクスポート
export default router;

// 参考：基礎から学ぶVue.js
// https://cr-vue.mio3io.com/
