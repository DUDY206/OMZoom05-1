import React, { useState } from "react";
// import "/socket.io/socket.io.js";
const Dashboard = () => {
//   const $ = window.jQuery;
//   const io = require("socket.io");
//   const Peer = require("peer");
//   const socket = io("/");
//   const videoGird = document.getElementById("video-grid");
//   const myVideo = document.createElement("video");
//   myVideo.muted = false;
//   const peers = {};
//   var myPeer = new Peer(undefined, {
//     path: "/peerjs",
//     host: "/",
//     port: "9899",
//   });

//   let myVideoStream;
//   navigator.mediaDevices
//     .getUserMedia({
//       video: true,
//       audio: false,
//     })
//     .then((stream) => {
//       myVideoStream = stream;
//       addVideoStream(myVideo, stream);

//       myPeer.on("call", (call) => {
//         call.answer(stream);
//         const video = document.createElement("video");
//         call.on("stream", (userVideoStream) => {
//           console.log("answer stream");
//           addVideoStream(video, userVideoStream);
//         });
//       });

//       socket.on("user-connected", (userId) => {
//         connectToNewUser(userId, stream);
//       });

//       let text = $("#chat_message");
//       // when press enter send message
//       $("html").keydown(function (e) {
//         if (e.which == 13 && text.val().length !== 0) {
//           console.log(text);
//           socket.emit("message", text.val());
//           text.val("");
//         }
//       });

//       socket.on("user-disconnected", (userId) => {
//         if (peers[userId]) peers[userId].close();
//       });

//       socket.on("createMessage", (message) => {
//         $(".messages").append(
//           `<li class="message"><b>user</b></br>${message}</li>`
//         );
//         scrollToBottom();
//       });
//     });

//   myPeer.on("open", (id) => {
//     socket.emit("join-room", "fe5912e1-01db-48f7-8471-10358fec598b", id);
//   });

//   const connectToNewUser = (userId, stream) => {
//     const call = myPeer.call(userId, stream);
//     const video = document.createElement("video");

//     call.on("stream", (userVideoStream) => {
//       addVideoStream(video, userVideoStream);
//     });

//     call.on("close", () => {
//       video.remove();
//     });

//     peers[userId] = call;
//   };

//   const addVideoStream = (video, stream) => {
//     video.srcObject = stream;
//     video.addEventListener("loadedmetadata", () => {
//       video.play();
//     });
//     videoGird.append(video);
//   };

//   const scrollToBottom = () => {
//     var d = $(".main__chat_window");
//     d.scrollTop(d.prop("scrollHeight"));
//   };

//   const muteUnmute = () => {
//     const enabled = myVideoStream.getAudioTracks()[0].enabled;
//     if (enabled) {
//       myVideoStream.getAudioTracks()[0].enabled = false;
//       setUnmuteButton();
//     } else {
//       setMuteButton();
//       myVideoStream.getAudioTracks()[0].enabled = true;
//     }
//   };

//   const setMuteButton = () => {
//     const html = `
//         <i class="fas fa-microphone"></i>
//         <span>Mute</span>
//       `;
//     document.querySelector(".main__mute_button").innerHTML = html;
//   };

//   const setUnmuteButton = () => {
//     const html = `
//         <i class="unmute fas fa-microphone-slash"></i>
//         <span>Unmute</span>
//       `;
//     document.querySelector(".main__mute_button").innerHTML = html;
//   };

//   const playStop = () => {
//     console.log("object");
//     let enabled = myVideoStream.getVideoTracks()[0].enabled;
//     if (enabled) {
//       myVideoStream.getVideoTracks()[0].enabled = false;
//       setPlayVideo();
//     } else {
//       setStopVideo();
//       myVideoStream.getVideoTracks()[0].enabled = true;
//     }
//   };

//   const setStopVideo = () => {
//     const html = `
//         <i class="fas fa-video"></i>
//         <span>Stop Video</span>
//       `;
//     document.querySelector(".main__video_button").innerHTML = html;
//   };

//   const setPlayVideo = () => {
//     const html = `
//       <i class="stop fas fa-video-slash"></i>
//         <span>Play Video</span>
//       `;
//     document.querySelector(".main__video_button").innerHTML = html;
//   };

  return (
    <div className="main">
      <div className="main__left">
        <div className="main__videos">
          <div id="video-grid"></div>
        </div>
        <div className="main__controls">
          <div className="main__controls__block">
            <div
              onClick="muteUnmute()"
              className="main__controls__button main__mute_button"
            >
              <i className="fas fa-microphone"></i>
              <span>Mute</span>
            </div>
            <div
              onClick="playStop()"
              className="main__controls__button main__video_button"
            >
              <i className="fas fa-video"></i>
              <span>Stop Video</span>
            </div>
          </div>
          <div className="main__controls__block">
            <div className="main__controls__button">
              <i className="fas fa-shield-alt"></i>
              <span>Security</span>
            </div>
            <div className="main__controls__button">
              <i className="fas fa-user-friends"></i>
              <span>Participants</span>
            </div>
            <div className="main__controls__button">
              <i className="fas fa-comment-alt"></i>
              <span>Chat</span>
            </div>
          </div>
          <div className="main__controls__block">
            <div className="main__controls__button">
              <span className="leave_meeting">Leave Meeting</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main__right">
        <div className="main__header">
          <h6>Chat</h6>
        </div>
        <div className="main__chat_window">
          <ul className="messages"></ul>
        </div>
        <div className="main__message_container">
          <input
            id="chat_message"
            type="text"
            placeholder="Type message here..."
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
