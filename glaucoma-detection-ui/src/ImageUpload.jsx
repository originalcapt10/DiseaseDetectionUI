import { createRef } from "react";
import "./ImageUpload.css";

function ImageUpload({ updateImage, uploadedImage }) {
  const fileInputRef = createRef();

  const handleUpload = (event) => {
    updateImage(event.target.files[0]);
  };

  const deleteImage = () => {
    updateImage(null);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="upload-image">
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleUpload}
          placeholder="Upload An Image"
        />
        <button onClick={handleUploadClick}>Upload Image</button>
      </div>
      {uploadedImage && (
        <div className="delete-image">
          <button onClick={deleteImage}>Delete Image</button>
        </div>
      )}
    </>
  );
}

export default ImageUpload;
