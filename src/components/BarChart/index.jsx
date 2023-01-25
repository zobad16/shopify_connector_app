import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarChart = () => {
  const labels = ["M", "T", "W", "T", "F", "S", "S"];

  const data = {
    labels,
    datasets: [
      {
        label: "Monthly",
        barThickness: 2,
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
      <Bar
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

export default BarChart;
