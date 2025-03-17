<script setup lang="ts">
const loginWithGoogle = () => {
  // Aquí iría la lógica para autenticar con Google
  // Por ahora solo mostraremos un console.log para propósitos educativos
  console.log('Iniciando sesión con Google...')
}
</script>

<template>
  <v-container fluid class="fill-height d-flex align-center justify-center bg-grey-lighten-3">
    <v-row align="center" justify="center">
      <v-col cols="11" sm="8" md="6" lg="7">
        <v-card class="mx-auto pa-5 card-with-bg" elevation="8">
          <div class="content-wrapper">
            <!-- Logo y título -->
            <div class="text-center mb-6">
              <v-img
                height="200"
                src="@/assets/images/Massalaves-background.jpg"
                cover
                class="mb-4 rounded"
              ></v-img>
              <h1 class="text-h4 font-weight-bold primary--text mt-4">{{$t('login.welcome')}}</h1>
              <p class="text-body-1 text-grey-darken-1">
                {{$t('login.community')}}
              </p>
            </div>

            <!-- Botón de login con Google -->
            <v-btn
              block
              color="primary"
              size="large"
              variant="elevated"
              class="mb-4"
              prepend-icon="mdi-google"
              @click="loginWithGoogle"
            >
              {{$t('login.loginWithGoogle')}}
            </v-btn>

            <v-divider class="my-4"></v-divider>

            <!-- Texto informativo -->
            <p class="text-caption text-center mt-3 text-grey-darken-1">
              {{$t('login.description')}}
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.fill-height {
  min-height: 100vh;
}

.card-with-bg {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.card-with-bg::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('@/assets/images/Massalaves-background.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(2px);
  opacity: 0.28;
  z-index: -1;
}

.content-wrapper {
  position: relative;
  z-index: 2;
}

/* Asegurar que el texto tenga buen contraste contra el fondo */
h1, p {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}
</style>
