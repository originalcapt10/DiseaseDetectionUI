import { useState } from "react";
import "./App.css";
import ImageUpload from "./ImageUpload";

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  console.log(uploadedImage, "the uploaded Image");
  return (
    <>
      <div className="parent-container">
        {uploadedImage && (
          <div className="uploaded-image-div">
            <img
              alt="Uploaded Image"
              src={URL.createObjectURL(uploadedImage)}
              className="uploaded-image"
            />
          </div>
        )}
        <br />
        <div className="image-upload-component">
          <ImageUpload
            updateImage={setUploadedImage}
            uploadedImage={uploadedImage}
          />
        </div>
      </div>
    </>
  );
}

export default App;
