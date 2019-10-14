<template>
    <div>
      <div class="q-pa-md row items-start q-gutter-md">
        <appHost v-for="host in hosts" :host="host" :key="host.id">
        </appHost>
      </div>
    </div>
</template>
<script>
import Host from './Host'

export default {
  data () {
    return {
    }
  },

  components: {
    appHost: Host
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
