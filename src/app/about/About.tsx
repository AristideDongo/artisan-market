
export const Testimonial = ({ text, author, role }: { text: string; author: string; role: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-700 mb-4 italic">&quot;{text}&quot;</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold mr-3">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-medium">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
  
export  const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
      <div className="text-amber-600 mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );