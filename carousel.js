//user will see an image displayed
//user will have the option of 2 buttons: forward & back
//a single img tag will rotate the images (using an array of sources & .attrib)

//set up image array
var imageArray = ['berlin.jpg', 'capetown.jpg', 'chi.jpg', 'miami.jpg', 'mtl.jpg','neworleans.jpg','nyc.jpg'];

$(document).ready(function(){
var place = 0;
//set intial image - select the image & set the source
var img = $('#display')
img.attr('src',imageArray[place])

//event listener for next
  $('#next').on("click", function(){
//function to select & display next (+1) img in array
//if user clicks next, then images will move forward 1 in index
 if(place===imageArray.length-1){
   place=0;
 }else{
   //reassigning the variable another way to write would be place+=1
   place = place+1;
 }
  img.attr('src',imageArray[place])
  });

//event listener back
  $('#back').on("click", function(){
//function to select & display previous (-1) img in array
if(place === 0){
  place=imageArray.length-1
}else {
//reassigning the variable another way to write would be place+=1
  place -=1;
}
//if user clicks back, then images will move back 1 in index
 img.attr('src',imageArray[place])
  });
});
