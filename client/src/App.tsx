import { useState } from "react";
import "./App.css";
import {
  useFiles,
  FileInput,
  UploadedFile,
  UploadError,
} from "@hilma/fileshandler-client";

function App() {
  const [fileObj, setFileObj] = useState<UploadedFile | null>(null);
  const filesUploader = useFiles(["post"]);

  const handleFileChange = (value: UploadedFile): void => {
    setFileObj(value);
  };

  const handleError = (error: UploadError) => {
    console.error("Error while upload file in client", error);
  };

  const send = async () => {
    try {
      await filesUploader.post("/upload-image");
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
          <li>
            Present the image before sending it to the server Advance options:
            add handle for errors, delete file, handle multiple files with
            MultipleFileInput
          </li>
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
          <li>
            Advance options: save multiple files, save files with different
            types (image and file)
          </li>
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
        {fileObj && <button onClick={send}>send</button>}
        {fileObj && (
          <>
            <br />
            <h4>preview:</h4>
            <img src={fileObj.link} alt="" />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
