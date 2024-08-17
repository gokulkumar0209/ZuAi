import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ResultProps {
  percentage: number;
  selectedFile: File | null;
}

const Result: React.FC<ResultProps> = ({ percentage, selectedFile }) => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    if (selectedFile && selectedFile.type === "application/pdf") {
      const reader = new FileReader();

      reader.onload = () => {
        // Create an object URL for the PDF file
        setPdfUrl(reader.result as string);
      };

      reader.readAsDataURL(selectedFile); // Read the file as data URL
    } else {
      setPdfUrl(null); // Clear URL if not a PDF file
    }
  }, [selectedFile]);

  const getColor = (percentage: number) => {
    if (percentage < 50) return { pathColor: "red", textColor: "red" };
    if (percentage < 75) return { pathColor: "orange", textColor: "orange" };
    return { pathColor: "green", textColor: "green" };
  };

  const { pathColor, textColor } = getColor(percentage);

  return (
    <div>
      <CircularProgressbar
        className="w-40"
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor,
          textColor,
          trailColor: "lightgrey",
        })}
      />
      <div>
        {selectedFile ? (
          selectedFile.type === "application/pdf" ? (
            <iframe
              src={pdfUrl || ""}
              title="PDF Preview"
              width="100%"
              height="600px"
              style={{ border: 'none' }}
            />
          ) : (
            <div>Selected file is not a PDF.</div>
          )
        ) : (
          <div>No file selected</div>
        )}
      </div>
    </div>
  );
};

export default Result;
