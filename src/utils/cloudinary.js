// Cloudinary utility functions for image upload

/**
 * Upload image to Cloudinary
 * @param {File} imageFile - Image file to upload
 * @returns {Promise<string>} - URL of uploaded image
 */
export const uploadToCloudinary = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
      }/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload image to Cloudinary");
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
};

/**
 * Delete image from Cloudinary
 * @param {string} imageUrl - URL of image to delete
 * @returns {Promise<void>}
 */
export const deleteFromCloudinary = async (imageUrl) => {
  try {
    // Extract public_id from Cloudinary URL
    const urlParts = imageUrl.split("/");
    const publicIdWithExtension = urlParts.slice(-2).join("/");
    const publicId = publicIdWithExtension.split(".")[0];

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
      }/image/destroy`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          public_id: publicId,
          upload_preset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
        }),
      }
    );

    if (!response.ok) {
      console.warn(
        "Failed to delete image from Cloudinary:",
        await response.text()
      );
    }
  } catch (error) {
    console.warn("Error deleting image from Cloudinary:", error);
  }
};
