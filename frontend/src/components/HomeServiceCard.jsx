const HomeServiceCard = ({ state }) => {
  return (
    <div className="w-full flex flex-col bg-gray-50 text-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={state.image} alt={state.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{state.name}</h3>
        <p className="text-sm text-black">{state.description}</p>
        <a
          href={state.link}
          className="mt-2 inline-block text-start  rounded transition"
        >
          İncele
        </a>
      </div>
    </div>
  );
};

export default HomeServiceCard;
