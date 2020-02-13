<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <div class="q-gutter-y-md column" style="max-width: 300px">
        <q-input v-model.trim="nameModel"  label="Name">
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-input>
          <q-input v-model.number="ageModel"   label="Age">
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-input>
          <q-input v-model="cityModel"  label="City">
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-input>
      </div>
    </q-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import mapProps from '../lib/mapProps'

export default {
  computed: {
    ...mapGetters('user', ['user']),
    ...mapProps(['name', 'age', 'city'], {
      object: 'user',
      action: 'user/setProp'
    })
  }
}
</script>
