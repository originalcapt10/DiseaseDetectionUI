import axios from "axios";

function ImageAnalysis({ imageToBeAnalyzed, updateAnalysis }) {
  const handleAnalyzeClick = ({ imageToBeAnalyzed }) => {
    const formData = new FormData();
    formData.append("image", imageToBeAnalyzed);
    axios
      .post("url", formData)
      .then((res) => {
        console.log("Response received");
        updateAnalysis(res);
      })
      .catch((err) => {
        console.error("Error Analyzing The Image:", err);
      });
  };

  return (
    <>
      <div className="analyze-image">
        <button onClick={handleAnalyzeClick}>Analyze Image</button>
      </div>
    </>
  );
}

export default ImageAnalysis;
