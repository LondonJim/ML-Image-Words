describe("Data", () => {

  describe('#imageConvert', () => {

    it('returns images data in array', () => {

      mockImageData = { data: [199, 176, 142, 255,
                                  196, 172, 142, 255],
                           height: 200,
                           width: 320 }

      tfMock = {
        fromPixels: () => { return mockImageData },
      }

      word = "word"

      data = new Data(tfMock)

      data.imageAdd(mockImageData, word)

      expect(data.imageAdd(mockImageData, word)).toEqual([mockImageData, mockImageData])
    })
  })

})
