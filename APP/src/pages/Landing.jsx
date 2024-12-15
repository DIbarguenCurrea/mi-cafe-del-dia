import "react";
import { Player } from "@lottiefiles/react-lottie-player";

function Landing() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "150px",
          margin: 0,
        }}
      >
        Mi café del día
      </h1>
      <Player
        src="https://lottie.host/31f49c10-34e4-422f-87a7-afbd8a129923/MFZV5UuaLg.json"
        style={{
          height: "500px",
          width: "500px",
        }}
        loop
        autoplay
      />
    </div>
  );
}

export default Landing;
