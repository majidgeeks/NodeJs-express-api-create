import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://majid123:majid123@smitproject.6dvbyoq.mongodb.net/SMIT1?retryWrites=true&w=majority"
  )
  .then((res) => console.log("Database connected"));
export default mongoose;
