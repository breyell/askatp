<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        #askatp
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        start
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item href="#">
        end
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
