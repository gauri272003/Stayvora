// // // const express=require("express");
// // // const app=express();
// // // const path = require("path");
// // // const mongoose=require("mongoose");
// // // const Listing=require("./models/listing.js");
// // // const methodOverride = require("method-override");
// // // const ejsMate=require("ejs-mate");
// // // const wrapAsync=require("./utilis/wrapAsync.js");
// // // const Expresserror=require("./utilis/Expresserror.js");

// // // const mongo_url="mongodb://127.0.0.1:27017/wanderlust";
// // // main().then(()=>{
// // //     console.log("connected to DB");
// // // }).catch((err)=>{
// // //     console.log(err);
// // // });

// // // async function main(){
// // //     await mongoose.connect(mongo_url);
// // // }
// // // app.set("view engine","ejs");
// // // app.set("views",path.join(__dirname,"views"));
// // // app.use(methodOverride("_method"));
// // // app.use(express.urlencoded({ extended: true }));
// // // app.engine("ejs",ejsMate);
// // // app.use(express.static(path.join(__dirname,"/public")));


// // // app.get("/test/Listing",
// // //   wrapAsync(async(req,res)=>{
// // //     let sampleListing=new Listing({
// // //         title:"My new villa",
// // //         description:"By the beach",
// // //         price:1200,
// // //         location:"Calangute,Goa",
// // //         country:"India",
// // //     });
// // //     await sampleListing.save();
// // //     console.log('sample was saved');
// // //     res.send("successfull testing");
// // // })
// // // );

// // // //index route
// // // app.get("/listings",wrapAsync(async(req,res)=>{
// // //    const allListing=await Listing.find({});
// // //    res.render("listings/index.ejs",{allListing});
// // // })
// // // );

// // // //root route
// // // app.get("/",(req,res)=>{
// // //     console.log("Hi,i am root");
// // // });

// // // //new route
// // // app.get("/listings/new",(req,res)=>{
// // //    res.render("listings/new.ejs");

// // // });


// // // // read route 
// // // app.get("/listing/:id",wrapAsync(async(req,res)=>{
// // //     let{id}=req.params;
// // //   const listing= await Listing.findById(id);
// // //     res.render("listings/show.ejs",{listing});
// // // })
// // // );

// // // //create route
// // // app.post("/listings",  
// // //   wrapAsync(async (req, res) => {
// // // // get the value and parse it
// // // if(!req.body.listing){
// // //   throw new Expresserror(404,"send valid data for listings")
// // // };
// // //   const newListing = new Listing(req.body.listing);
// // //   await newListing.save();
// // //   res.redirect("/listings");

// // // })
// // // );


// // // //edit route

// // //   app.get("/listing/:id/edit",wrapAsync(async (req, res) => {
// // //   let { id } = req.params;
// // //   const listing = await Listing.findById(id);
// // //   res.render("listings/edit.ejs", { listing });
// // // })
// // //  );

// // // // update route
// // // app.put("/listing/:id", wrapAsync(async (req, res) => {
// // //   let { id } = req.params;
// // //   if(!req.body.listing){
// // //   throw new Expresserror(404,"send valid data for listings")
// // // }
// // //   await Listing.findByIdAndUpdate(id, { ...req.body.listing });
// // //   res.redirect(`/listing/${id}`);
// // // })
// // // );

// // // //Delete Route
// // // app.delete("/listings/:id", wrapAsync(async (req, res) => {
// // //   let { id } = req.params;
// // //   let deletedListing = await Listing.findByIdAndDelete(id);
// // //   console.log(deletedListing);
// // //   res.redirect("/listings");
// // // })
// // // );


// // // //if the user enter path doesnt match with any path then it handel error
// // // app.all("/*", (req, res, next) => {
// // //  throw new Expresserror(404, "Page Not Found!");
// // // });
// // // //middleware(i face the issue here)

// // // // Global Error Handler
// // // app.use((err, req, res, next) => {
// // //   const { status = 500, message = "Something went wrong" } = err;
// // //      res.render("error.ejs",{message})
// // // });


// // //
// // // Load environment variables
// // if(process.env.NODE_ENV !="production"){
// // require('dotenv').config()
// // }
// // console.log("MONGO_URL:", process.env.MONGO_URL);

// // const express=require("express");
// // const app=express();
// // const path = require("path");
// // const mongoose=require("mongoose");
// // const Listing=require("./models/listing.js");
// // const methodOverride = require("method-override");
// // const ejsMate=require("ejs-mate");
// // const wrapAsync=require("./utilis/wrapAsync.js");
// // const Expresserror=require("./utilis/Expresserror.js");
// // //const mongo_url="mongodb://127.0.0.1:27017/wanderlust";
// // const dburl=process.env.MONGO_URL;


// // const {listingSchema,reviewSchema}=require("./schema.js")
// // const session=require("express-session");
// // const flash=require("connect-flash");
// // const passport=require("passport");
// // const LocalStrategy=require("passport-local");
// // const User=require("./models/user.js");


// // const listingsRouter=require("./routes/listing.js");
// // const Review=require("./models/review.js");

// // const reviewsRouter=require("./routes/review.js");
// // const userRouter=require("./routes/user.js");




// // main().then(()=>{
// //     console.log("connected to DB");
// // }).catch((err)=>{
// //     console.log(err);
// // });
// // async function main(){
// //     await mongoose.connect(dburl);
// // }
// // app.set("view engine","ejs");
// // app.set("views",path.join(__dirname,"views"));
// // app.use(methodOverride("_method"));
// // app.use(express.urlencoded({ extended: true }));

  
// // app.use(express.json());   // <---- ADD THIS
// // app.engine("ejs",ejsMate);
// // app.use(express.static(path.join(__dirname,"/public")));

// // //sassion option
// // const sessionOptions = {
// //   secret: "mysupersetcode",
// //   resave: false,
// //   saveUninitialized: true,
// //   cookie: {
// //     expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),  // must be Date object
// //     maxAge: 7 * 24 * 60 * 60 * 1000,        
// //     httpOnly:true,                 // OK as number
// //   },
// // };

// // //to use the session


// // //root router
// // //app.get("/",(req,res)=>{
// //  // console.log("Hi,i am root");
// // //});

// // app.get("/test/Listing",
// //   wrapAsync(async(req,res)=>{
// //     let sampleListing=new Listing({
// //         title:"My new villa",
// //         description:"By the beach",
// //         price:1200,
// //         location:"Calangute,Goa",
// //         country:"India",
// //     });
// //     await sampleListing.save();
// //     console.log('sample was saved');
// //     res.send("successfull testing");
// // })
// // );

// // app.use(session(sessionOptions));
// // app.use(flash());

// // //for authetication
// // app.use(passport.initialize());
// // app.use(passport.session());
// // passport.use(new LocalStrategy(User.authenticate()));

// // passport.serializeUser(User.serializeUser());
// // passport.deserializeUser(User.deserializeUser());


// // //middleware for flash
// // app.use((req,res,next)=>{
// //   res.locals.success=req.flash("success");
// //   res.locals.error=req.flash("error");
// //   res.locals.currentUser=req.user;
// //   next();
// // });

// // app.use("/listings",listingsRouter);
// //  app.use("/listings/:id/reviews",reviewsRouter);
// // app.use("/",userRouter);

// // //if the user enter path doesnt match with any path then it handel error

// // app.use((req, res, next) => {
// //  next(new Expresserror(404, "Page Not Found!"));
// // });

// // // Global Error Handler

// // app.use((err, req, res, next) => {
// //   const { status = 500, message = "Something went wrong" } = err;
// //   res.status(status).render("error.ejs",{message})
// // });
// // // starting the port
// // app.listen(8080,()=>{
// //   console.log("server is listerning to the port 8080");
// // });


// // Load environment variables
// // ================== LOAD ENV ==================
// // ================== LOAD ENV =================
// require("dotenv").config(); // MUST be at the very top

// console.log("MONGO_URL:", process.env.MONGO_URL);
// console.log("SESSION_SECRET:", process.env.SESSION_SECRET);

// // ================== IMPORTS =================
// const express = require("express");
// const app = express();
// const path = require("path");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");

// const session = require("express-session");
// const MongoStore = require("connect-mongo");
// const flash = require("connect-flash");

// const passport = require("passport");
// const LocalStrategy = require("passport-local");

// // ================== MODELS =================
// const Listing = require("./models/listing.js");
// const Review = require("./models/review.js");
// const User = require("./models/user.js");

// // ================== UTILS =================
// const wrapAsync = require("./utilis/wrapAsync.js");
// const Expresserror = require("./utilis/Expresserror.js");

// // ================== ROUTES =================
// const listingsRouter = require("./routes/listing.js");
// const reviewsRouter = require("./routes/review.js");
// const userRouter = require("./routes/user.js");

// // ================== DATABASE =================
// const dburl = process.env.MONGO_URL;

// async function main() {
//   await mongoose.connect(dburl);
//   console.log("Connected to MongoDB");
// }

// // ================== APP CONFIG =================
// app.engine("ejs", ejsMate);
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(methodOverride("_method"));

// // ================== SESSION STORE =================
// const store = MongoStore.create({
//   mongoUrl: dburl,
//   crypto: {
//     secret: process.env.SESSION_CRYPTO_SECRET,
//   },
//   touchAfter: 24 * 3600, // 24 hours
// });

// store.on("error", (err) => {
//   console.log("MongoStore Error:", err);
// });

// const sessionOptions = {
//   store,
//   name: "session",
//   secret: process.env.SESSION_SECRET, // MUST exist
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     httpOnly: true,
//     maxAge: 7 * 24 * 60 * 60 * 1000,
//     secure: process.env.NODE_ENV === "production",
//   },
// };

// app.use(session(sessionOptions));
// app.use(flash());

// // ================== PASSPORT CONFIG =================
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// // ================== GLOBAL MIDDLEWARE =================
// app.use((req, res, next) => {
//   res.locals.success = req.flash("success");
//   res.locals.error = req.flash("error");
//   res.locals.currentUser = req.user;
//   next();
// });

// // ================== TEST ROUTE =================
// app.get("/test/listing", wrapAsync(async (req, res) => {
//   const sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });
//   await sampleListing.save();
//   res.send("Test listing saved successfully");
// }));

// // ================== ROUTES =================
// app.use("/listings", listingsRouter);
// app.use("/listings/:id/reviews", reviewsRouter);
// app.use("/", userRouter);

// // ================== 404 HANDLER =================
// app.use((req, res, next) => {
//   next(new Expresserror(404, "Page Not Found"));
// });

// // ================== ERROR HANDLER =================
// app.use((err, req, res, next) => {
//   const { status = 500, message = "Something went wrong" } = err;
//   res.status(status).render("error.ejs", { message });
// });

// // ================== START SERVER =================
// main()
//   .then(() => {
//     app.listen(process.env.PORT || 8080, () => {
//       console.log(`Server running on port ${process.env.PORT || 8080}`);
//     });
//   })
//   .catch((err) => console.log(err));

// ================== LOAD ENV =================
require("dotenv").config();

console.log("MONGO_URL:", process.env.MONGO_URL);
console.log("SESSION_SECRET:", process.env.SESSION_SECRET);

// ================== IMPORTS =================
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const passport = require("passport");
const LocalStrategy = require("passport-local");

// ================== MODELS =================
const User = require("./models/user.js");

// ================== UTILS =================
const wrapAsync = require("./utilis/wrapAsync.js");
const Expresserror = require("./utilis/Expresserror.js");

// ================== ROUTES =================
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

// ================== DATABASE =================
const dburl = process.env.MONGO_URL;

async function main() {
  await mongoose.connect(dburl);
  console.log("Connected to MongoDB");
}

// ================== APP CONFIG =================
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware order is CRITICAL
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// ================== SESSION STORE =================
const store = MongoStore.create({
  mongoUrl: dburl,
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("SESSION STORE ERROR:", err);
});

const sessionOptions = {
  store,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // FIXED: Must be Date object
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};

app.use(session(sessionOptions));
app.use(flash());

// ================== PASSPORT CONFIG =================
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ================== GLOBAL MIDDLEWARE =================
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

// ================== IGNORE SOURCE MAP REQUESTS =================
app.use((req, res, next) => {
  // Ignore Chrome extension and source map requests
  if (req.path.includes('.map') || req.path.includes('sourceMap')) {
    return res.status(204).end();
  }
  console.log(`${req.method} ${req.path}`);
  next();
});

// ================== ROUTES =================
app.use("/", userRouter);
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);

// ================== 404 HANDLER =================
app.all("*", (req, res, next) => {
  next(new Expresserror(404, "Page Not Found"));
});

// ================== ERROR HANDLER =================
app.use((err, req, res, next) => {
  console.log("ERROR CAUGHT:", err.message);
  
  const { status = 500, message = "Something went wrong" } = err;
  
  // Prevent double response
  if (res.headersSent) {
    console.log("Headers already sent, delegating to default handler");
    return next(err);
  }
  
  res.status(status).render("error.ejs", { message });
});

// ================== START SERVER =================
main()
  .then(() => {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });