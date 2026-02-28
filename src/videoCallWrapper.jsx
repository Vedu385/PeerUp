import React from "react";
import { useParams } from "react-router-dom";
import VideoCall from "./VideoCall";

const VideoCallWrapper = () => {
  const { room } = useParams();
  return <VideoCall roomName={room} />;
};

export default VideoCallWrapper;