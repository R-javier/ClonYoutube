<template>
    
      <v-row wrap no-gutters max-height="100%">
          <v-col class="py-5 pt-2 px-5 mt-3" v-for="(video, index) in videos" :key="index">
              <v-card max-width="250" color="transparent">
                  <v-img class="white--text align-end" v-bind:src="video.image">
                     
                  </v-img>
                    
                  <v-card-text class="text--primary">
                      <div class="d-flex ">
                       <div>
                          <img class="pr-2" src="https://yt3.ggpht.com/lCtNZz3ygAJxPHt5vxigBisHY3Oe0rHFMdnFiZIfJveZKEXY4OzapSDw4xhVrNuNVzDGnMZF=s48-c-k-c0x00ffffff-no-nd-rj" width="35px" alt="">{{video.userimg}}</div>
                      <div class="font-weight-bold ">{{ video.title }}</div>
                        </div>
                      <div class="text-secondary ml-9">{{video.user}}</div>
                
                      <div class="text-secondary ml-9">
                          {{video.views}}</div>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
  
</template>

<script>
export default {
    data(){
        return{
            videos:[
                {
                    image:
                    'https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDbMXWxilkY-N_pnSyXnAF5YpNWw',
                    title:'lofi hip hop radio - beats to study/relax to',
                    views: '247 lo estan viendo',
                    date:'22/01/2021',
                    user: 'Chilled Empire',
                },

                {
                    image:
                    'https://i.ytimg.com/an_webp/OpM8ZNen5GU/mqdefault_6s.webp?du=3000&sqp=CJOEpogG&rs=AOn4CLArQkaMrfz5FCGHIyd22Y6xQ0KjSQ',
                    title:'Babasónicos - Vampi (En Vivo) [Versión Larga]',
                    views: '18,656,163 vistas',
                    date:'26 feb. 2016',
                    user: 'Babasonicos'
                },

                {
                    image:
                    'https://i.ytimg.com/vi/8JIdJzWfKsI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANbZwUxYXh_khE2oN_0KP1We90rw ',
                    title:'J. Balvin - No Hay Título',
                    views: '885,125 vistas',
                    date:'10 ago. 2016',
                    user: 'J Balvin'
                },

                {
                   image:
                    'https://i.ytimg.com/an_webp/Ek4IRwHBqyo/mqdefault_6s.webp?du=3000&sqp=CLb4pYgG&rs=AOn4CLBqubKihzBYop6q52j1Rgq3w0D2Bw',
                    title:'Nostalgia - Drive',
                    views: '885,125 vistas',
                    date:'10 ago. 2016',
                    user: 'Virtua Waves'
                },

                {
                    image:
                    'https://i.ytimg.com/an_webp/lTRiuFIWV54/mqdefault_6s.webp?du=3000&sqp=CKLjpYgG&rs=AOn4CLBSLX_BUU_5Mc7dbDnfOvqBdazZ_g',
                    title:'1 A.M Study Session',
                    views: '8.66 M de suscriptores',
                    date:'22/01/2021',
                    user: 'Lofi Girl'
                },

                {
                    image:
                    'https://i.ytimg.com/an_webp/L2N7TkkE7zc/mqdefault_6s.webp?du=3000&sqp=CMjbpYgG&rs=AOn4CLCPQZtJ5jQ4YNv9QCT8_9AQ4qaqVg',
                    title:'Naruto y Sakura vs Kakashi | Español Latino Full HD',
                    views: '179,314 vistas',
                    date:'17 may. 2021',
                    user: 'Himawari Uzumaki'
                },

                {
                    image:
                    'https://i.ytimg.com/an_webp/PCq8liJrvr0/mqdefault_6s.webp?du=3000&sqp=CNjUpYgG&rs=AOn4CLCttPukWozMt47RAjLSbnMILWGduw',
                    title:'COVID-19 en Argentina ',
                    views: '43,578 vistas',
                    date:'21 jun. 2021',
                    user: 'Todo Noticias'
                },

                {
                    image:
                    'https://i.ytimg.com/an_webp/dyZDkPTtCqg/mqdefault_6s.webp?du=3000&sqp=CLD_pYgG&rs=AOn4CLCw_y-9I8r9mlnfuywvES2wJVaqfQ',
                    title:'Ambiente musical de cafetería',
                    views: '3,085,616 vistas',
                    date:'10 ene. 2021',
                    user: 'Coffee Shop Ambience'
                }
            ]
        }
    }
}
</script>

<style>

</style>