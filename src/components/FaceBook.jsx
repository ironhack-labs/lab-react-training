import profiles from "../data/berlin.json";

export default function faceBook() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="flex flex-col items-center border p-4 rounded-lg shadow-lg"
        >
          <img
            src={profile.img}
            alt={`${profile.firstName} ${profile.lastName}`}
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-lg font-semibold">
            {profile.firstName} {profile.lastName}
          </h2>
          <p className="text-sm text-gray-600">Age: {profile.age}</p>
          <p className="text-sm text-gray-600">Country: {profile.country}</p>
        </div>
      ))}
    </div>
  );
}
