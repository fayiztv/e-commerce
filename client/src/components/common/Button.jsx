export default function Button({ text, style, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg bg-black text-white transition hover:bg-gray-800 ${style}`}
    >
      {text}
    </button>
  );
}