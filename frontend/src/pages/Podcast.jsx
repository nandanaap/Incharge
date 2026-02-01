const Podcast = () => {
  const episodes = [
    {
      id: 1,
      title: "Understanding Anxiety in Modern Life",
      description: "Exploring the causes and management of anxiety in today's fast-paced world.",
      duration: "45 min",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "Building Healthy Relationships",
      description: "Tips and strategies for creating and maintaining meaningful connections.",
      duration: "38 min",
      date: "March 8, 2024"
    },
    {
      id: 3,
      title: "Mindfulness and Mental Health",
      description: "How mindfulness practices can improve your overall wellbeing.",
      duration: "42 min",
      date: "March 1, 2024"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Incharge Podcast</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for insightful conversations about mental health, wellness, and personal growth. 
            Our podcast features expert interviews, practical tips, and inspiring stories.
          </p>
        </div>

        {/* Featured Episode */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Latest Episode</h2>
            <h3 className="text-3xl font-bold mb-4">{episodes[0].title}</h3>
            <p className="text-lg mb-6">{episodes[0].description}</p>
            <div className="flex justify-center items-center space-x-4 mb-6">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">{episodes[0].duration}</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">{episodes[0].date}</span>
            </div>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Listen Now
            </button>
          </div>
        </div>

        {/* Episode List */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Recent Episodes</h2>
          <div className="space-y-6">
            {episodes.map((episode) => (
              <div key={episode.id} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{episode.title}</h3>
                  <p className="text-gray-600 mb-2">{episode.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{episode.duration}</span>
                    <span>{episode.date}</span>
                  </div>
                </div>
                <button className="btn-primary ml-6">
                  Play
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription */}
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Podcast</h2>
          <p className="text-gray-600 mb-6">
            Never miss an episode! Subscribe on your favorite podcast platform.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="btn-primary">Apple Podcasts</button>
            <button className="btn-primary">Spotify</button>
            <button className="btn-primary">Google Podcasts</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;