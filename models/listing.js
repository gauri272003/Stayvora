const mongoose = require("mongoose");
const review = require("./review");
const { ref, required } = require("joi");
const { Schema } = mongoose;
const Review=require("./review.js");

// Create schema
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
   

  image: {
   url:String,
   filename:String,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be a positive number"],
    default: 0,
  },
  location: {
    type: String,
    required: true,
   // ✅ ensures every listing has a location
  },
  country:{ 
    type:String,
    
  // lowercase field name for consistency
  },
 reviews: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review"
  }
],
owner:{
  type:Schema.Types.ObjectId,
  ref:"User",
},
geometry:{
  type:{
     type:String,
  enum:["Point"],
  required:false,
},
coordinates:{
  type:[Number],
  required:false,
},
},
//category:{
////  type:String,
  //enum:["mountains","arctic","farms","desert
 });
listingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
    await Review.deleteMany({_id:{$in:listing.reviews}});
  }
})


// Export model
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
