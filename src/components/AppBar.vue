<template>
  <v-app-bar app dark :color="appBarColor">
    <v-toolbar-title class="text-uppercase">List_Nest_Is_The_Best</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-img src="@/assets/nest.jpg" height="40"></v-img>

    <v-navigation-drawer v-model="drawerOpen" right app>
      <v-list>
        <v-list-item :to="{ name: 'CreateList' }">
          <v-list-item-icon>
            <v-icon>add</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Create New List Item</v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ name: 'ViewList' }">
          <v-list-item-icon>
            <v-icon>list</v-icon>
          </v-list-item-icon>
          <v-list-item-content>View List Items</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-btn icon @click="drawerOpen = !drawerOpen">
      <v-icon>menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>
