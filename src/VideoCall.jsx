import React, { useEffect, useRef } from "react";

const VideoCall = ({ roomName }) => {
  const jitsiContainerRef = useRef(null);

  useEffect(() => {
    const domain = "meet.jit.si";

    const options = {
      roomName: roomName,
      width: "100%",
      height: 500,
      parentNode: jitsiContainerRef.current,
      userInfo: {
        displayName: "PeerUP User",
      },
    };

    new window.JitsiMeetExternalAPI(domain, options);
  }, [roomName]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4">
        🎥 Video Call Room
      </h2>
      <div ref={jitsiContainerRef} />
    </div>
  );
};

export default VideoCall;