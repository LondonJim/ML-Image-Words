describe("Data", () => {

  describe('#imageConvert', () => {

    it('returns image data', () => {
      mockImageData = { data: [199, 176, 142, 255,
                               196, 172, 142, 255],
                        height: 200,
                        width: 320 }
      data = new Data
      expect(data.imageConvert(mockImageData)).toEqual(mockImageData)
    })
  })

})
