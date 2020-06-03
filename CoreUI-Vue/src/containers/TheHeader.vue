<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand to="/" style="margin-left: auto; margin-right: auto; display: block;">
      <!-- <div style="text-align: center">
        <h3>Zipdoc Analysis Report (2020.06)</h3>
        <h6>by. Sohui Kim & Eunkyung Koh</h6>
      </div> -->
      <img src="zipdoc_project_black.png" width="318px" height="75px"/>
      
    </CHeaderBrand>
    
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0 mb-0"/>
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  }
}
</script>
