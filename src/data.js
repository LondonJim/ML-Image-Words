class Data {

  constructor(tensorflow = tf) {
    this.tf = tensorflow
    this.data = []
    this.labels = []
  }

  imageAdd(imageData, word) {
    this.data.push(this.tf.fromPixels(imageData, 1))
    this.labels.push(word)
    return this.data
  }

  // Still to add: this.tf.tidy(), stuff = this.model.predict(x)

  modelSetup() {
    this.model = this.tf.sequential()

    this.model.add(this.tf.layers.conv2d({
      inputShape: [200, 200, 1],
      kernelSize: 5,
      filters: 8,
      strides: 1,
      activation: 'relu',
      kernelInitializer: 'VarianceScaling'
    }))

    this.model.add(this.tf.layers.maxPooling2d({
      poolSize: [2, 2],
      strides: [2, 2]
    }))

    this.model.add(this.tf.layers.conv2d({
      kernelSize: 5,
      filters: 16,
      strides: 1,
      activation: 'relu',
      kernelInitializer: 'VarianceScaling'
    }))

    this.model.add(this.tf.layers.maxPooling2d({
      poolSize: [2, 2],
      strides: [2, 2]
    }))

    this.model.add(this.tf.layers.flatten())

    this.model.add(this.tf.layers.dense({
      units: 10,
      kernelInitializer: 'VarianceScaling',
      activation: 'softmax'
    }))

    const optimizer = this.tf.train.sgd(0.15)

    this.model.compile({
      optimizer: optimizer,
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy'],
    })
  }

  train(data) {
    let x
    const dataLength = this.data.length
    let history

    for (let i = 0; i < dataLength; i++) {
      console.log(this.data[i])
      // stuff = this.model.predict(x)
      history = this.trainModel(i, x)
    }
    history.then((history) => {console.log(history)})
  }

  async trainModel(i, x) {
    return await this.model.fit(this.data[i].reshape([-1, 200, 200, 1]), this.tf.ones([1,10]),
      {epochs: 1})
  }

}
