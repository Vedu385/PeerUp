import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SkillConnect from "./SkillConnect";
import SafeVoice from "./SafeVoice";
import EventPulseGraph from "./EventPulseGraph";
import Login from "./Login";
import SignupStudent from "./SignupStudent";
import SignupFaculty from "./SignupFaculty";
import StudentProfile from "./StudentProfile";
import GamifiedBattles from "./GamifiedBattles";
import NQueens from "./NQueens";
import Leaderboard from "./Leaderboard";  
import ColorGame from "./colorMatch";
import ReactionGame from "./reactionGame";
import ReactQuizGame from "./RamQuiz";
import MemoryGame from "./memoryMatch";
import SoundRecognitionGame from "./soundRecognise";
import VideoCall from "./VideoCall";
import SortingGame from "./dragdropSort";
import VideoCallWrapper from "./videoCallWrapper";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skillconnect" element={<SkillConnect />} />
      <Route path="/safevoice" element={<SafeVoice />} />
      <Route path="/eventpulse" element={<EventPulseGraph />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup-student" element={<SignupStudent />} />
      <Route path="/signup-faculty" element={<SignupFaculty />} />
      <Route path="/battles" element={<GamifiedBattles />} />
      <Route path="/battles/nqueens" element={<NQueens />} /> 
      <Route path="/battles/colormatch" element={<ColorGame />} /> 
      <Route path="/battles/reaction" element={<ReactionGame />} /> 
      <Route path="/battles/memory" element={<MemoryGame />} /> 
      <Route path="/battles/sorting" element={<SortingGame />} /> 
      <Route path="/battles/soundrecognition" element={<SoundRecognitionGame />} /> 
      <Route path="/skillconnect/videocall" element={<VideoCall />} />   
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/call/:room" element={<VideoCallWrapper />} />
      

      {/* THIS IS IMPORTANT */}
      <Route path="/profile/:name" element={<StudentProfile />} />
      <Route path="/profile/:name/quiz" element={<ReactQuizGame />} />
    </Routes>
  );
}

export default App;