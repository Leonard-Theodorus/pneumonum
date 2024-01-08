import * as tf from '@tensorflow/tfjs';

const model = await tf.loadLayersModel('pneumonia-model.json');

// const prediction = model.predict(image); convert data to image later here
export function predictImage(){
    
}