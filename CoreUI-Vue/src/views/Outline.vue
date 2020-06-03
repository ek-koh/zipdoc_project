<template>
  <div>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="3">
            <h1 id="Outline" class="card-title mb-0">Outline</h1>
            <div class="large text-muted">June 2020</div>
          </CCol>
          <img src="preview.png" width="1200px" height="700px">
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  name: 'Outline',
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  }
}
</script>
