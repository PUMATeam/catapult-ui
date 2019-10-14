<template>
  <div>
      <q-card>
        <q-item>
          <q-item-section avatar>
            <q-avatar icon="fas fa-server" size="100px">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ name }}</q-item-label>
            <q-item-label caption>{{ status }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-card-actions>
          <q-btn color="green">Start</q-btn>
          <q-btn color="red">Stop</q-btn>
        </q-card-actions>
      </q-card>
  </div>
</template>
<script>
export default {
  props: ['host'],
  data () {
    return {
      ...this.host

    }
  }
}
</script>
