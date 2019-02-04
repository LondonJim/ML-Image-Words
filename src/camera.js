'use strict'

class Camera {

  constructor(videoArgs = { audio: false, video: { width: 200, height: 200 } },
              data = new Data) {
    this.data = data
    this.video = document.getElementById('video')
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.snap = document.getElementById("snap")
    this.videoArgs = videoArgs
    this.width = 200
    this.height = 200
  }

  async streamVideo() {
    this.stream = await navigator.mediaDevices.getUserMedia(this.videoArgs)
    this.video.srcObject = this.stream
    return this.video.srcObject
  }

  grabPhoto() {
    let alertMessage

    this.snap.addEventListener("click", function() {
      let word = document.getElementById('word').value

      if (word !== "") {
        document.getElementById('alert').innerHTML = ""
        this.ctx.drawImage(this.video, 0, 0, this.width, this.height)
        let imageData = this.ctx.getImageData(0, 0, this.width, this.height)
        this.data.imageAdd(imageData, word)
        alertMessage = "picture taken"
      } else {
        document.getElementById('alert').innerHTML = "Please enter a word"
        alertMessage = "no word"
      }
    }.bind(this))
    return alertMessage
  }

}
