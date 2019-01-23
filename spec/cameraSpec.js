describe("Camera", () => {

  document.createElement.bind(document)
  document.getElementById = (tagName) => {
    return {
      getContext: () => ({ drawImage: () => {} }),
      srcObject: "video.srcObject",
      addEventListener: () => {}
    }
  }

  window.navigator['__defineGetter__']('mediaDevices', function(){
    return { getUserMedia: (arg) => { return arg } }
  })

  describe("#streamVideo", () => {

    // using async await to make sure promise of stream is resolved
    it("set video.srcObject", async () => {
      camera = new Camera ('stream values')
      stream = await camera.streamVideo()
      expect(stream).toEqual('stream values')
    })

  })

  describe("#grabPhoto", () => {

    it("set click event listener", () => {
      camera = new Camera
      expect(camera.grabPhoto()).toEqual('event listener active')
    })

  })

})