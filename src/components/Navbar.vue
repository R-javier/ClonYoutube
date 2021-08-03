<template>
  <div>
    <v-app-bar
      color="primary"
      dark
      clipped-left
      app
    >
      <v-app-bar-nav-icon app @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-btn text class="mx-0 px-0">
          <img src="@/assets/YouTube.svg" alt="Youtube" width="120">
      </v-btn>

      <v-spacer></v-spacer>
            <Searchbar/>
       <v-spacer></v-spacer>

      <v-btn icon class="mx-1">
        <v-icon>mdi-video-plus</v-icon>
      </v-btn>

      <v-btn icon class="mx-1">
        <v-icon>mdi-view-grid</v-icon>
      </v-btn>

        <v-btn
            class="mx-1"
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>

         
              <v-btn
                class="px-3 py-5"
                outlined
                color="blue"
                >
                <v-icon class="mr-3">mdi-account-circle</v-icon>
                Acceder
                </v-btn>
         
      

       
    
    </v-app-bar>

     <v-navigation-drawer app  class="scroller" dark color="primary" width="230" v-model="drawer" temporary mini-variant-width="72" >
         <v-list>
             <div>
                  <v-app-bar-nav-icon class="ml-3 pt-1" @click="drawer = !drawer"></v-app-bar-nav-icon>

                  <v-btn text class="mx-0 mt-1 px-4">
                          <img src="@/assets/YouTube.svg" width="120" alt="">
                  </v-btn>
             </div>

             <v-divider class="mt-4 mb-2"></v-divider>

             <div>
                 <v-list-item link v-if=" !showFullDrawer" class="px-2" :to="{name:'Home'}">
                     <v-list-item-icon class="mr-7">
                         <v-icon color="grey" >mdi-home</v-icon>
                     </v-list-item-icon>
                 
                 <v-list-content>
                     Principal
                 </v-list-content>
                 </v-list-item>
             </div>

             <div>
                 <v-list-item link v-if=" !showFullDrawer" class="px-2" :to="{name:'Explorar'}">
                     <v-list-item-icon class="mr-7">
                         <v-icon color="grey">mdi-compass</v-icon>
                     </v-list-item-icon>
                     <v-list-content>
                         Explorar
                     </v-list-content>
                 </v-list-item>
             </div>

             <div>
                 <v-list-item link  v-if=" !showFullDrawer" class="px-2" :to="{name:'Suscripciones'}">
                     <v-list-item-icon class="mr-7">
                         <v-icon color="grey">mdi-youtube-subscription</v-icon>
                     </v-list-item-icon>
                     <v-list-content>
                         Suscripciones
                     </v-list-content>
                 </v-list-item>
             </div>

             <v-divider class="mt-2 mb-2"></v-divider>

             <div>
                 <v-list-item link v-if=" !showFullDrawer" class="px-2" :to="{name:'Biblioteca'}">
                     <v-list-item-icon class="mr-7">
                         <v-icon color="grey">mdi-play-box-multiple</v-icon>
                     </v-list-item-icon>
                     <v-list-content>
                         Biblioteca
                     </v-list-content>
                 </v-list-item>
             </div>

             <div>
                 <v-list-item link v-if=" !showFullDrawer" class="px-2">
                     <v-list-item-icon class="mr-7">
                         <v-icon color="grey">mdi-history</v-icon>
                     </v-list-item-icon>
                     <v-list-content>
                         Historial
                     </v-list-content>
                 </v-list-item>
             </div>

              <v-divider class="mt-2 mb-5"></v-divider>

              <div class="px-5 mt-4">
                  <v-list-content>
                      Accede para dar "Me" <br>
                      gusta" a los videos, realizar <br>
                      comentarios y suscribirte.
                      <v-btn
                        class="px-3 py-5 mt-3"
                        outlined
                        color="blue"
                      >
                <v-icon class="mr-3">mdi-account-circle</v-icon>
                Acceder
                </v-btn>
                  </v-list-content>
                  
              </div>

              <v-divider class="mt-5 mb-2"></v-divider>
         </v-list>

         <div>
             <v-list-content class="grey--text px-3 mt-4 ">
                 LO MEJOR DE YOUTUBE
             </v-list-content>
         </div>

          <div class="py-0 mt-2">
        <v-list-item link v-if=" !showFullDrawer" class="px-5-5">
            <v-list-item-icon>
                <v-icon dark color="subtitle">mdi-music</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>Música</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </div>


        <div class="py-0">
        <v-list-item link v-if=" !showFullDrawer" class="px-5-5">
            <v-list-item-icon>
                <v-icon dark color="subtitle">mdi-trophy-variant-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>Deportes</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </div>

        <div class="py-0">
        <v-list-item link v-if=" !showFullDrawer" class="px-5-5">
            <v-list-item-icon>
                <v-icon dark color="subtitle">mdi-youtube-gaming</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>Videojuegos</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </div>

        <div class="py-0">
        <v-list-item link v-if=" !showFullDrawer" class="px-5-5">
            <v-list-item-icon>
                <v-icon dark color="subtitle">mdi-filmstrip</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>Películas</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </div>

        <div class="py-0">
        <v-list-item link v-if=" !showFullDrawer" class="px-5-5">
            <v-list-item-icon>
                <v-icon dark color="subtitle">mdi-newspaper-variant-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>Noticias</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </div>

        <div class="py-0">
        <v-list-item link v-if=" !showFullDrawer" class="px-5-5">
            <v-list-item-icon>
                <v-icon dark color="subtitle">mdi-broadcast</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>En vivo</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </div>

        <div class="py-0">
        <v-list-item link v-if=" !showFullDrawer" class="px-5-5">
            <v-list-item-icon>
                <v-icon dark color="subtitle">mdi-lightbulb-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>Aprendizaje</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </div>

        <div class="py-0">
        <v-list-item link v-if=" !showFullDrawer" class="px-5-5">
            <v-list-item-icon>
                <v-icon dark color="subtitle">mdi-video-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>Perfiles</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </div>

        <v-divider class="mt-3 mb-3"></v-divider>


             <div class="py-0">
        <v-list-item link v-if=" !showFullDrawer" class="px-5-5">
            <v-list-item-icon>
                <v-icon dark color="subtitle">mdi-youtube</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>Premium</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </div>

           <div class="py-0">
        <v-list-item link v-if=" !showFullDrawer" class="px-5-5">
            <v-list-item-icon>
                <v-icon dark color="subtitle">mdi-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>Configuración</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </div>

           <div class="py-0">
        <v-list-item link v-if=" !showFullDrawer" class="px-5-5">
            <v-list-item-icon>
                <v-icon dark color="subtitle">mdi-help</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>Ayuda</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </div>

        <v-divider class="mt-3 mb-3"></v-divider>


      <div class="py-0 mt-5 caption mx-2">
      <v-list-item>
        <p class="grey--text">© 2021 Google LLC</p>
      </v-list-item>
      </div>
     </v-navigation-drawer>
  </div>
</template>

<script>

import Searchbar from '../components/Searchbar.vue'

export default {
    components:{
        Searchbar,
    },
    

    data(){
        return{
            drawer: true
        }
    }

}
</script>

<style>

</style>