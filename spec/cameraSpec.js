describe("Camera", () => {

  let setValue = ""

  data = () => {
    return {
      imageConvert: () => {},
    }
  }

  document.createElement.bind(document)
  document.getElementById = (tagName) => {
    return {
      getContext: () => ({ drawImage: () => {},
                           getImageData: () => {} }),
      srcObject: "video.srcObject",
      addEventListener: (arg1, arg2) => { this.data = data, arg2() },
      innerHTML: "",
      value: setValue
    }
  }

  window.navigator['__defineGetter__']('mediaDevices', function(){
    return { getUserMedia: (arg) => { return arg } }
  })

  describe("#streamVideo", () => {

    // using async await to make sure promise of stream is resolved
    it("set video.srcObject", async () => {
      camera = new Camera ('stream values', data)
      stream = await camera.streamVideo()
      expect(stream).toEqual('stream values')
    })

  })

  describe("#grabPhoto", () => {

    it("no image recorded if no word value", () => {
      camera = new Camera(undefined, data)
      expect(camera.grabPhoto()).toEqual('no word')
    })

    it("image recorded it there is a word", () => {
      camera = new Camera(undefined, data)
      setValue = "word"
      expect(camera.grabPhoto()).toEqual('picture taken')
    })

  })

})
