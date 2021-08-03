<template>
    <v-row>
       <v-text-field
        class="input-search ml-12"
        placeholder="Buscar" 
        dense 
        solo
        hide-details 
        outlined
        size="50px"
        background-color="primaryDarker">
       </v-text-field>
        <v-btn
        dark
        solo
        depressed
        height="40">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn
        dark
        solo
        depressed
        height="40"
        text
        class="mx-1">
           <v-icon>mdi-microphone</v-icon>
        </v-btn>
    </v-row>

    
</template>

<script>
export default {

}
</script>

<style>

</style>