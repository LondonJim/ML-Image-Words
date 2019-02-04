describe("Data", () => {

  describe('#imageConvert', () => {

    it('returns images data in array', () => {
      mockImageDataOne = { data: [199, 176, 142, 255,
                                  196, 172, 142, 255],
                           height: 200,
                           width: 320 }

      mockImageDataTwo = { data: [121, 116, 222, 235,
                                  101, 175, 212, 245],
                           height: 200,
                           width: 320 }
      data = new Data
      data.imageConvert(mockImageDataOne)

      expect(data.imageConvert(mockImageDataTwo)).toEqual([mockImageDataOne, mockImageDataTwo])
    })
  })

})
