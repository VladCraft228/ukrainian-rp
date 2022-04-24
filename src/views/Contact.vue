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
        url: 'ukrainian-rp/files/gta_for_samp.torrent', // File URL Goes Here
        method: 'GET',
        responseType: 'blob',
      }).then((res) => {
        var FILE = window.URL.createObjectURL(new Blob([res.data]));
        var docUrl = document.createElement('x');
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