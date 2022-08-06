import { useReactMediaRecorder } from "react-media-recorder";
import { Button } from "@nextui-org/react";
import { TbPlayerRecord, TbPlayerStop } from "react-icons/tb";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import styles from "../styles/Recorder.module.css";

const Recorder = () => {
  const [parent] = useAutoAnimate();
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      audio: true,
      onStop: function (blobUrl, blob) {
        const recordingBox = document.getElementById("recordingBox");
        var li = document.createElement("li");
        var trash = document.createElement("button");
        var recording = document.createElement("AUDIO");

        let r = (Math.random() + 1).toString(36).substring(7);
        console.log("random", r);

        //Attaching source to Audio Player, setting Autoplay and Styling.
        recording.setAttribute("src", blobUrl);
        recording.setAttribute("controls", "controls");
        recording.setAttribute("autoPlay", "autoPlay");
        recording.setAttribute("id", "audio");
        recording.style.opacity="35%"

        //Attaching, removal function, X to Button and Styling.
        trash.innerHTML += `X`;
        trash.style.backgroundColor = "transparent";
        trash.style.color="#D82148"
        trash.style.border = "none";
        trash.style.fontWeight = "bold";
        trash.addEventListener("click", function handleClick(event) {
          trash.parentElement.remove();
        });

        li.appendChild(recording);
        li.appendChild(trash);
        li.setAttribute("key", r);
        recordingBox.appendChild(li);

        document.body.append(`<Button>Test</Button>`)
      },
    });

  const statusOutput = () => {
    if (status === "recording") {
      return status;
    } else {
      return "Lets Catch a Sound";
    }
  };

  return (
    <div className={styles.mainRecorder}>
      <h1 className={styles.status}>{statusOutput()}</h1>
      <div className={styles.transport}>
        <Button
          className={styles.transButton}
          auto
          flat
          animated
          css={{color:'#151D3B', backgroundColor:"#D82148"}}
          icon={<TbPlayerRecord fill="currentColor" filled="true"   />}
          onClick={startRecording}
        />

        <Button
          className={styles.transButton}
          auto
          flat
          animated
          css={{color:'#151D3B', backgroundColor:"#DADBBD"}}
          icon={<TbPlayerStop fill="currentColor" filled="true" />}
          onClick={stopRecording}
        />
      </div>

      <ul ref={parent} id="recordingBox" className={styles.recordingBox}></ul>
    </div>
  );
};

export default Recorder;
