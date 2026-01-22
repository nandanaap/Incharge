const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Anxiety Management Fundamentals",
      description: "Learn practical techniques to understand and manage anxiety in daily life.",
      duration: "4 weeks",
     
      level: "Beginner"
    },
    {
      id: 2,
      title: "Building Emotional Intelligence",
      description: "Develop your emotional awareness and interpersonal skills.",
      duration: "6 weeks",
    
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Mindfulness for Mental Health",
      description: "Integrate mindfulness practices into your daily routine for better wellbeing.",
      duration: "8 weeks",
     
      level: "All Levels"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Courses & Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your mental health journey with our comprehensive courses and educational resources.
          </p>
        </div>

        {/* Featured Book */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Book</h2>
              <h3 className="text-2xl font-semibold mb-4">"Taking Charge: A Guide to Mental Wellness"</h3>
              <p className="text-lg mb-6">
                Our comprehensive guide to understanding and improving your mental health. 
                Packed with practical strategies, real-life examples, and expert insights.
              </p>
              <div className="space-x-4">
                <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Buy on Amazon
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  Read Sample
                </button>
              </div>
            </div>
            <div className="bg-white bg-opacity-20 h-64 rounded-lg flex items-center justify-center">
              <p className="text-white">Book Cover Image</p>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Online Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{course.duration}</span>
                  <span className="text-2xl font-bold text-primary">{course.price}</span>
                </div>
                <button className="w-full btn-primary">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Greatness Community */}
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Greatness Community</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Connect with like-minded individuals on their mental health journey. Share experiences, 
              get support, and access exclusive content and resources.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Monthly Workshops</h4>
                <p className="text-gray-600 text-sm">Interactive sessions with mental health experts</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Peer Support Groups</h4>
                <p className="text-gray-600 text-sm">Connect with others facing similar challenges</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Exclusive Resources</h4>
                <p className="text-gray-600 text-sm">Access to premium content and tools</p>
              </div>
            </div>
            <button className="btn-primary text-lg px-8 py-3">
              Become a Member - $29/month
            </button>
          </div>
        </div>

        {/* Free Resources */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Free Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-2">Meditation Guide</h4>
              <p className="text-gray-600 text-sm mb-4">10-minute daily meditation practices</p>
              <button className="btn-secondary text-sm">Download PDF</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-2">Anxiety Workbook</h4>
              <p className="text-gray-600 text-sm mb-4">Exercises to manage anxiety symptoms</p>
              <button className="btn-secondary text-sm">Download PDF</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-2">Sleep Hygiene Checklist</h4>
              <p className="text-gray-600 text-sm mb-4">Tips for better sleep quality</p>
              <button className="btn-secondary text-sm">Download PDF</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-2">Stress Management Kit</h4>
              <p className="text-gray-600 text-sm mb-4">Tools and techniques for stress relief</p>
              <button className="btn-secondary text-sm">Download PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;