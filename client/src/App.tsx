import { useState } from "react";
import "./App.css";
import {
  useFiles,
  FileInput,
  UploadedFile,
  UploadError,
} from "@hilma/fileshandler-client";

function App() {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [resultPath, setResultPath] = useState<string | null>(null);
  const filesUploader = useFiles(["post"]);

  const handleFileChange = (value: UploadedFile): void => {
    setUploadedFile(value);
  };

  const handleError = (error: UploadError) => {
    console.error("Error while upload file in client", error);
  };

  const send = async () => {
    try {
      const res = await filesUploader.post("/api/cat/upload-image");
      setResultPath(res.data);
    } catch (error) {
      console.error("error while upload files to server", error);
    }
  };

  return (
    <div className="container">
      <div className="instructions">
        <h2>Let's start building our uploading files project :)</h2>
        <h3>Client side</h3>
        <ol>
          <li> Install files package</li>
          <li> Use basic FileInput component and filesUploader</li>
          <li>Present the image before sending it to the server</li>
          <br />
          <span>Advance options: add handle for errors, delete file</span>
        </ol>
        <a
          href="https://hilma.atlassian.net/wiki/spaces/TD/pages/83362528/Hilma+Fileshandler#client"
          target="blank"
        >
          Link to docs
        </a>
        <hr />
        <h3>Server side</h3>
        <ol>
          <li> Install files package</li>
          <li>Configure the fileshandler module</li>
          <li>
            Generate server functions within the controller and service to save
            the image
          </li>
          <h4>Connect between client & server</h4>
          <li>Create a request to the endpoint created in the previous step</li>
          <li>
            Display the saved image on the client-side once it's stored on the
            server
          </li>
          <br />
          <span>
            Advance options: save files with different types (image and file)
          </span>
        </ol>
        <a
          href="https://hilma.atlassian.net/wiki/spaces/TD/pages/83362528/Hilma+Fileshandler#server"
          target="blank"
        >
          Link to docs
        </a>
      </div>
      <div className="work-page">
        <h2>Upload files here</h2>
        <FileInput
          filesUploader={filesUploader}
          type={"image"}
          onChange={handleFileChange}
          onError={handleError}
        />
        {uploadedFile && <button onClick={send}>send</button>}
        {uploadedFile && (
          <>
            <br />
            <h4>preview:</h4>
            <img src={uploadedFile.link} alt="" />
          </>
        )}

        {resultPath && (
          <>
            <br />
            <h4>result:</h4>
            <img src={`/api${resultPath}`} alt="" />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
