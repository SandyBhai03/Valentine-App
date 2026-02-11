import { useState, useEffect, useRef } from "react";

function App() {
  const [accepted, setAccepted] = useState(false);
  const [name, setName] = useState("Nirali");
  const noRef = useRef(null);
  const cardRef = useRef(null);

  // Get name from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlName = params.get("name");
    if (urlName) setName(urlName);
  }, []);

  // Move NO button randomly
  const moveNoButton = () => {
    const card = cardRef.current;
    const noBtn = noRef.current;

    const cardRect = card.getBoundingClientRect();

    const x = Math.random() * (cardRect.width - 60);
    const y = Math.random() * (cardRect.height - 60);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  };

  if (accepted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-center p-4">
        <h1 className="text-4xl font-bold mb-6">YAY!! 🎉💖</h1>
        <video
          src="src/assets/Happy.mp4"
          autoPlay
          controls
          className="rounded-xl shadow-lg w-full max-w-md"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-pink-400 p-4">
      <div
        ref={cardRef}
        className="bg-white rounded-2xl shadow-xl p-8 text-center w-full max-w-md relative"
      >
        <div className="text-6xl mb-4">🐱💖</div>

        <h1 className="text-2xl font-bold mb-6">
          {name}, will you be my Valentine?
        </h1>

        <div className="relative h-20 flex items-center justify-center gap-6">
          <button
            onClick={() => setAccepted(true)}
            className="bg-pink-400 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-lg transition cursor-pointer border-2 border-pink-500"
          >
            Yes 💕
          </button>

          <span
            ref={noRef}
            onMouseEnter={moveNoButton}
            className="absolute bg-yellow-300 p-2 rounded-full bold cursor-pointer text-gray-500 left-18"
          >
            No
          </span>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          “No seems a bit shy 😈”
        </p>
      </div>
    </div>
  );
}

export default App;
