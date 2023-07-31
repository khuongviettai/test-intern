<template>
  <v-card elevation="1" class="card">
    <div class="input-component">
      <div class="mb-4">
        <input class="input" v-model="inputValue" placeholder="... nhập text ở đây">
        <span class="copy" @click="copyToClipboard">COPY</span>
      </div>
      <div class="md-3">
        <p v-if="showCopied" class="copied">{{ inputValue }}</p>
        <span v-if="showCopied" class="coped-ok" @click="hideCopiedMessage">ok</span>
      </div>
    </div>
  </v-card>
</template>

<script>
import { Clipboard } from '@capacitor/clipboard';

export default {
  name: 'CustomInputComponent',
  data() {
    return {
      inputValue: '',
      showCopied: false,
    };
  },
  methods: {
    async copyToClipboard() {
      await Clipboard.write({ string: this.inputValue });
      this.showCopied = true;
      setTimeout(() => {
        this.showCopied = false;
      }, 2000);
    },
    hideCopiedMessage() {
      this.showCopied = false;
    },
  },
};
</script>

<style>
.input-component{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.mb-4 {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-color: rgba(0,0,0,0.01);
}

.input {
  padding: 20px 10px;
  background-color: #F5F7FA;
  width: 300px;
}

.copy{
  position: absolute;
  margin-right: 10px;
}
.copied{
  width: 300px;
  padding: 20px 10px;
}

.coped-ok{
  margin-right: 10px;
  padding: 20px 10px;
}

.md-3{
  width: 300px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #F5F7FA;

}

@media only screen and (max-width: 1200px) {

  .md-3{
    margin-top: 150px;
  }

}
</style>
