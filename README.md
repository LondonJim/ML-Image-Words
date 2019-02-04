# Associate Facial Expressions with Words

An exercise in machine learning using TensorFlow JavaScript library. The idea is to capture images of an individual and then associate certain facial expressions with words. These words can then be displayed on screen when the individual makes a facial expression into the webcam.

### Updates

04/02/18 - Add tensorflow code to create a model and train. Experimenting and playing around with the various tf variables.

### User stories

```
As a User
So I have data to work with
Capture multiple images using my webcam

As a User
So I can associate an image with a word
Have the option to enter a word

As a User
So I have a usable dataset
Have the images converted into tensors

As a User
So the results are accurate
Have the computer learn to associate words with images

As a User
So I can display words
Make facial expressions into the webcam

As a User
So I don't have to repeatedly capture images
The software saves necessary data
```

### Testing

Jasmine 3.3.0

- copy `SpecRunner.html` with path into browser

Cypress 3.1.4

- enter `npm test` in project root directory (`npm install` must be run once first)
