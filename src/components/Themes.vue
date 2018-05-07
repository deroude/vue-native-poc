<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Counter">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

  <ListView for="theme in themes">
    <v-template>
      <Label :text="theme.title"/>
      <Image v-if="surprise" :src="theme.image.fields.file.url"/>
    </v-template>
  </ListView>

  </Page>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    themes() {
      return this.$store.state.themes;
    }
  }
};
</script>
