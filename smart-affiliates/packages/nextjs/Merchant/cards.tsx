"use client";

const Cards: React.FC = () => {
  const activityData = [5, 3, 7, 2, 6, 4, 8];
  const platforms = ["Instagram", "Twitter", "Pinterest", "Facebook", "Reddit", "LinkedIn"];

  // Bar Chart Dimensions
  const barWidth = 50;
  const maxValue = Math.max(...activityData);
  const barChartHeight = 200;

  // Pie Chart Data (for demonstration)
  const total = activityData.reduce((acc, value) => acc + value, 0);
  const pieData = activityData.map(value => (value / total) * 100);

  return (
    <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Card 1: Activity Overview with Bar Chart */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
        <h3 className="text-xl font-semibold mb-4">Activity Overview</h3>
        <div className="flex">
          {activityData.map((value, index) => (
            <div key={index} className="flex-1 mx-1 relative">
              <div
                className="bg-purple-300"
                style={{
                  height: `${(value / maxValue) * barChartHeight}px`,
                  width: `${barWidth}px`,
                  transition: "height 0.3s ease",
                }}
              />
              <span className="text-center text-xs text-gray-600">{platforms[index]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card 2: Progress Statistics with Pie Chart */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-4">Progress Statistics</h3>
        <div className="relative w-48 h-48">
          <svg viewBox="0 0 32 32" className="absolute inset-0">
            {pieData.map((value, index) => {
              const radius = 16;
              const circumference = 2 * Math.PI * radius;
              const offset = circumference - (value / 100) * circumference;
              const rotation = index === 0 ? 0 : pieData.slice(0, index).reduce((acc, val) => acc + val, 0);

              return (
                <circle
                  key={index}
                  cx="16"
                  cy="16"
                  r={radius}
                  stroke="rgba(94, 53, 177, 0.8)"
                  strokeWidth="4"
                  strokeDasharray={`${circumference} ${circumference}`}
                  strokeDashoffset={offset}
                  style={{
                    transform: `rotate(${rotation * (Math.PI / 180)}rad)`,
                    transformOrigin: "50% 50%",
                    fill: "transparent",
                  }}
                />
              );
            })}
          </svg>
        </div>
        <div className="text-sm mt-4">
          <p className="text-orange-500">In Progress: 40% ($20,000)</p>
          <p className="text-green-500">Achieved: 60% ($12,000)</p>
          <p className="text-purple-500">Upcoming: 20% ($8,000)</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
