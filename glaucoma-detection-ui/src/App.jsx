import { useState } from "react";
import "./App.css";
import ImageUpload from "./ImageUpload";
import ImageAnalysis from "./ImageAnalysis";

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

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
        {analysisResult}
        <div className="image-upload-component">
          <ImageUpload
            updateImage={setUploadedImage}
            uploadedImage={uploadedImage}
            updateResult={setAnalysisResult}
          />
        </div>
        {uploadedImage && (
          <div>
            <ImageAnalysis
              imageToBeAnalyzed={uploadedImage}
              updateAnalysis={setAnalysisResult}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
