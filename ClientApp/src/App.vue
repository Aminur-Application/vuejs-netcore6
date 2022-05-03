<template>
  <v-app>
     <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>
        
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        bottom
        temporary
      >
        <v-list>
           <v-list-item value="true" v-for="(item, i) in items" :key="i" :to="item.link">
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list>
      </v-navigation-drawer>
    

    <v-main>
      <router-view />
    </v-main>

    <v-footer app>
      <span>&nbsp;NetCore6 + vue 3 application</span>
    </v-footer>
  </v-app>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css'
export default {
  name: 'App',

  data: () => ({
    clipped: true,
    drawer: true,
    miniVariant: false,
    right: true,
    title: 'ASP.NET Core Vue Starter',
    items: [
      { title: 'Home', icon: 'mdi-home', link: '/' },
      { title: 'Counter', icon: 'mdi-gesture-tap', link: '/counter' },
      { title: 'Fetch data', icon: 'mdi-download', link: '/fetch-data' }
    ]
    //
  }),

   
   
    
 
}
</script>
