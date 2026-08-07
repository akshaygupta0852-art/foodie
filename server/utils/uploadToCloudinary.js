import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";
const uploadCloudinary = (buffer, folder = "uploads") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          console.dir(error, { depth: null });

          if (error.response) {
            console.log("Response:", error.response);
          }

          return reject(error);
        }

        resolve(result);
      },
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

export default uploadCloudinary;
