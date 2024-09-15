<template>
  <div>
    <NuxtLayout />
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <NuxtPage />
  </div>
</template>


<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }

    .v-application--wrap {
    min-height: 0vh !important;
  }

  .v-application--wrap {
  min-height: unset;
}
</style>