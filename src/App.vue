<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile :to="{ path: '/' }">
          <v-list-tile-action> <v-icon>home</v-icon> </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{ path: '/Contact' }">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer;"
      ></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout justify-center align-center> <router-view /> </v-layout>
      </v-container>
      <v-container fluid>
        <v-layout justify-center align-center>
          <v-flex text-xs-center>
            <v-tooltip left>
              <v-btn slot="activator" :href="source" icon large target="_blank">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <v-btn
                slot="activator"
                icon
                large
                href="https://codepen.io/johnjleider/pen/rJdVMq"
                target="_blank"
              >
                <h1><codepen-icon /></h1>
              </v-btn>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
//import MenuIcon from "vue-material-design-icons/Menu.vue";
import CodepenIcon from "vue-material-design-icons/Codepen.vue";

export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  components: {
    //MenuIcon,
    CodepenIcon
  }
};
</script>

<style>
.icon-2x {
  height: 2em;
  width: 2em;
}
</style>
