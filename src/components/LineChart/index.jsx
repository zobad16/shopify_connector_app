import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LineChart = () => {
  const labels = ["M", "T", "W", "T", "F", "S", "S"];

  const data = {
    labels,
    datasets: [
      {
        label: "Monthly",
        // LineThickness: 2,
        borderRadius: 50,
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: ["indigo"],
        borderColor: ["#000"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <Line
        data={data}
        height={235}
        width={600}
        options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontSize: 25,
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
            },
          },
        }}
      />
    </>
  );
};

export default LineChart;
