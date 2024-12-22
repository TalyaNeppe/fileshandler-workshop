import "./App.css";

function App() {
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
          href="https://hilma.atlassian.net/wiki/spaces/TD/pages/1153597441/Fileshandler+-+Getting+started#Client"
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
          href="https://hilma.atlassian.net/wiki/spaces/TD/pages/1153597441/Fileshandler+-+Getting+started#Server"
          target="blank"
        >
          Link to docs
        </a>
      </div>
      <div className="work-page">
        <h2>Upload files here</h2>
      </div>
    </div>
  );
}

export default App;
