import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: "dejiszztd",
  api_key: 664579719799156,
  api_secret: "0lkD9Xk_ePxtyDb46WJ1Gu11v-U",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const { _id } = req.user;
    let folder = "avatars";
    return {
      folder: folder,
      allowed_formats: ["jpg", "png", "webp"],
      public_id: _id,
      transformation: [
        { width: 350, height: 350 },
        { width: 700, height: 700 },
      ],
    };
  },
});

export const upload = multer({ storage });
