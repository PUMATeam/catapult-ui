<template>
    <div>
      <div class="q-pa-md row items-start q-gutter-md">
        <appHost v-for="host in hosts" :host="host" :key="host.id">
        </appHost>
      </div>
      <q-dialog v-model="showNewHostModal">
        <appNewHost></appNewHost>
      </q-dialog>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="add" color="primary" @click="showNewHostModal = true" />
      </q-page-sticky>
    </div>
</template>
<script>
import Host from './Host'
import NewHost from './NewHost'

export default {
  data () {
    return {
      showNewHostModal: false
    }
  },

  components: {
    appHost: Host,
    appNewHost: NewHost
  },

  methods: {
  },

  computed: {
    hosts () {
      return this.$store.getters.hosts
    }
  },

  created () {
    this.$store.dispatch('FETCH_HOSTS')
  }
}
</script>
