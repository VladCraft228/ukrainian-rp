<template>
      <div class="contact">
        ass.
        <button @click="downloadFile()">DownLoad</button>
      </div>
</template>
<script>
import axios from 'axios';

export default {
  mounted() {
    this.downloadFile();
  },
  methods: {
    downloadFile() {
      axios({
        url: 'https://ukrainian-rp.netlify.app/gta_for_samp.torrent', // File URL Goes Here
        method: 'GET',
        responseType: 'blob',
      }).then((res) => {
        let FILE = window.URL.createObjectURL(new Blob([res.data]));
        let docUrl = document.createElement('x');
        docUrl.href = FILE;
        docUrl.setAttribute('download', 'file.torrent');
        document.body.appendChild(docUrl);
        docUrl.click();
      });
    }
  }
}
</script>
<style>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>