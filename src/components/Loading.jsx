import { ChefHat } from "lucide-react";

function Loading() {
  return (
    <div className="flex flex-col items-center mt-10">
      <ChefHat
        size={45}
        className="text-green-600 animate-bounce"
      />

      <p className="mt-3 text-gray-600">
        Hmm... checking what we can cook!
      </p>
    </div>
  );
}

export default Loading;