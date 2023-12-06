import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import * as data from '../../data/data.json';

interface ChartDataItem {
  date: string; 
  value: number;
  
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})


export class ChartComponent implements OnInit {

 

  public myChart!: Chart;
  public chartData:ChartDataItem[] = (data as any).default;
  public currentmonth:any;

  public chartedData:ChartDataItem[] = [] 

  public currentDate:Date = new Date()
  public currentMonth:any = new Date().getMonth()+1;
  public selectedMonth: string = 'current';
    
  createChart() {

    console.log(this.chartData);
    console.log('currentMonth',this.currentMonth);
    if (this.myChart) {
      this.myChart.destroy();
    }

    if (this.selectedMonth !== 'current') {
      console.log(this.selectedMonth)
      const selectedMonthIndex = new Date(this.selectedMonth + ' 1, 2000').getMonth() + 1;
      console.log('selectedmonthIndex',selectedMonthIndex);
      this.chartedData = this.chartData.filter(item => {
        const itemMonth = new Date(item.date).getMonth() + 1;
        return itemMonth === selectedMonthIndex;
      });
    } else {
      // If 'current' is selected, use data for the current month
      this.chartedData = this.chartData.filter(item => {
        const itemMonth = new Date(item.date).getMonth() + 1;
        return itemMonth === this.currentMonth;
      });
    }

    const labels: string[] = this.getWeekRanges(this.chartedData);
    console.log(labels);
    const valuesForDateRanges = this.getValuesForDateRanges(labels, this.chartedData);
    this.myChart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels:  labels,
        datasets: [
          {
            label: "value",
            data: valuesForDateRanges.value,
            backgroundColor: 'blue'
          }
          
        ]
      },
      options: {
        
        aspectRatio: 2.5,
        plugins: {
          tooltip: {
            enabled:true
          },
          legend:{
            display:false,
            
          }
        },
        scales: {
          
          x: {
            ticks: {
          
              maxRotation: 90,
              minRotation: 0
          },
            grid: {
              display: false
            }
            
          },
          y: {
            grid: {
              display: false
            }
          }
        }
      }
     
      
    });
  }

  getWeekRanges(data: ChartDataItem[]): string[] {
    // Implement logic to calculate week ranges based on your data
    // Example: Assuming each week starts on a Sunday
    const weekRanges: string[] = [];
    data.forEach(item => {
      const date = new Date(item.date);
      const startOfWeek = new Date(date);
      startOfWeek.setDate(date.getDate() - date.getDay()); // Start of the week (Sunday)
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6); // End of the week (Saturday)
      const weekRange = `${startOfWeek.toLocaleDateString()} - ${endOfWeek.toLocaleDateString()}`;
      if (!weekRanges.includes(weekRange)) {
        weekRanges.push(weekRange);
      }
    });
    console.log('weekRanges',weekRanges)
    return weekRanges;
  }

  getValuesForDateRanges(labels: string[], data: ChartDataItem[]): { value: number[] } {
    const values: { value: number[]} = {
      value: [],
     
    };

    labels.forEach(label => {
      const dateRangeValues = data.filter(item => {
        const date = new Date(item.date);
        const startOfWeek = new Date(date);
        startOfWeek.setDate(date.getDate() - date.getDay()); // Start of the week (Sunday)
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6); // End of the week (Saturday)
        const weekRange = `${startOfWeek.toLocaleDateString()} - ${endOfWeek.toLocaleDateString()}`;
        return weekRange === label;
      });

      if (dateRangeValues.length > 0) {
        // Sum up the values for each date range
        const valueTotal = dateRangeValues.reduce((sum, item) => sum + item.value, 0);
      
        values.value.push(valueTotal);

      } else {
        // If no data for the date range, set values to 0
        values.value.push(0);
      }
    });

    return values;
  }

  getmonth(){
  this.createChart();
  }
  ngOnInit(): void {
    this.createChart();
  }
}
