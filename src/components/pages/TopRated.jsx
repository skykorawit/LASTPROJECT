import { useState } from "react";

const person = {
  name: 'Beetle Feeding Game',
  theme: {
    backgroundImage: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
    color: 'white',
  }
};

export default function TodoList() {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100); 
  const [image, setImage] = useState("https://i1.wp.com/www.nextsteptv.com/wp-content/uploads/2017/11/Hercules_beetle_.jpg?resize=735%2C400"); 

  const feed = (foodLevel) => {
    const newLevel = level + foodLevel;

    if (newLevel > 100) {
      setImage("https://external-preview.redd.it/62-different-types-of-beetles-in-kansas-v0-NKwC3n7oSzyg4vwbfN5gy_p0HT5zBg6UESeoAqw0hBk.jpg?width=640&crop=smart&auto=webp&s=bfa8b3e99223fff29cb49500f0ff8ff9f99b65d7");
    }

    setLevel(newLevel);
    setSize(100 + newLevel); 
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center text-center text-white" 
      style={{ backgroundImage: person.theme.backgroundImage }}
    >
      <h1 className="text-4xl font-bold mb-4">{person.name}</h1>

      <img
        className="rounded-lg border-4 border-white shadow-xl transition-transform duration-500 hover:scale-105"
        src={image}
        alt="Beetle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          maxWidth: '90vw',
          maxHeight: '90vh',
        }}
      />

      <h2 className="text-2xl font-semibold mt-6">Beetle Feeding</h2>

      <div className="flex gap-4 mt-4">
        <button 
          onClick={() => feed(5)}
          className="px-4 py-2 bg-red-500 text-black rounded-md hover:bg-red-700 transition-transform hover:scale-105 duration-300"
        >
          Dmat pro (+5)
        </button>
        <button 
          onClick={() => feed(10)}
          className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-transform hover:scale-105 duration-300"
        >
          Dmat pro (+10)
        </button>
        <button 
          onClick={() => feed(20)}
          className="px-4 py-2 bg-green-400 text-black rounded-md hover:bg-green-500 transition-transform hover:scale-105 duration-300"
        >
          ELmatpro (+20)
        </button>
        <button 
          onClick={() => feed(15)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-transform hover:scale-105 duration-300"
        >
          Lmat pro (+15)
        </button>
        <button 
          onClick={() => feed(25)}
          className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition-transform hover:scale-105 duration-300"
        >
          Kabuto mat (+25)
        </button>
      </div>

      <p className="text-lg font-medium mt-4">Current Level: {level}</p>
    </div>
  );
}
