import "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        textAlign: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <Player
        src="https://lottie.host/2e018192-37c7-4525-864f-769c8bae9765/N4RIWqXWTQ.json"
        className="player"
        loop
        autoplay
        style={{ height: "500px", width: "500px" }}
      />
      <Button
        type="primary"
        onClick={() => navigate("/home")}
        style={{ color: "#D7CCC8", backgroundColor: "#A53F2B" }}
      >
        Volver al Inicio
      </Button>
    </div>
  );
}

export default NotFound;
