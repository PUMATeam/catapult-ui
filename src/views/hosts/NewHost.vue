<template>
  <div style="width: 700px;">
    <q-card>
      <q-card-section class="row items-center">
        <div class="text-h6">New Host</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <q-form>
          <q-input
            v-model="hostName"
            label="Name"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            v-model="hostAddress"
            label="Address"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <q-input
            v-model="port"
            label="Port"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <q-input
            v-model="userName"
            label="Username"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <q-input
            type="password"
            v-model="password"
            label="Password"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <q-checkbox v-model="localInstall" label="Local install" />
        <q-input
            v-if="localInstall"
            v-model="catapultNodePath"
            label="Catapult Node path"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <q-checkbox v-model="installHost" label="Install host" />

        <div>
          <q-btn color="primary" @click="createHost">
            submit
          </q-btn>
        </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      hostName: '',
      hostAddress: '',
      port: '8001',
      userName: 'root',
      password: '',
      localInstall: true,
      catapultNodePath: '',
      installHost: true
    }
  },
  methods: {
    createHost () {
      const host = {
        name: this.hostName,
        address: this.hostAddress,
        user: this.userName,
        password: this.password,
        port: parseInt(this.port, 10),
        local_node_path: this.catapultNodePath
      }
      console.log(this.installHost)
      this.$store.dispatch('CREATE_HOST', [ host, this.installHost ])
    }
  }
}
</script>
