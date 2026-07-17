const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description: String,
    images: [
    {
      filename: String,
      url: String,
    }
  ],
    // image:{
    //     type:String,
    //     default:"https://www.istockphoto.com/photo/404-error-isolated-on-white-background-page-not-found-gm2252677008-666118152?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2F404&utm_term=404%3A%3A%3A%3A00e200d7-801d-4dab-a5ae-6c0cf0a64231",
    //     set: (v) => v === "" ? "https://www.istockphoto.com/photo/404-error-isolated-on-white-background-page-not-found-gm2252677008-666118152?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2F404&utm_term=404%3A%3A%3A%3A00e200d7-801d-4dab-a5ae-6c0cf0a64231" : v,
    // },
    price:Number,
    location:String,
    country:String,
});

const Listing= mongoose.model("Listing",listingSchema);
module.exports = Listing;