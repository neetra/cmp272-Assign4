const { saveToS3 , addTextToImage} = require('./utils');

const bucket = 'nfss-primary';

exports.handler = async (event) => {
  var h = parseInt(event.h)
  var w = parseInt(event.w)
  
   var image_index =Math.floor(Math.random() * 4) + 1
   var image_path = "images/doge" + image_index + ".jpg"
   var image_name= ("tmp/doge" + image_index )
     
 const resized = await addTextToImage(image_path, h , w);
 const key = await saveToS3(bucket,image_name, resized);
 
  return { image_name };
};