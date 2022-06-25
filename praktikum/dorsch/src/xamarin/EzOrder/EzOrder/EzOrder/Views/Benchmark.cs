using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Diagnostics;

using Xamarin.Forms;

namespace EzOrder.Views
{
    public class Benchmark : ContentPage
    {
        public Benchmark()
        {
            var btnBenchmark = new Button { Text = "Benchmark" };
            btnBenchmark.Clicked += BtnBenchmark_Clicked;
            Content = new StackLayout
            {
                Children = {
                    new Label { Text = "Benchmark", FontAttributes = FontAttributes.Bold },
                    new Editor(),
                    btnBenchmark
                }
            };
        }

        private void BtnBenchmark_Clicked(object sender, EventArgs e)
        {
            var btnBenchmark = new Button { Text = "Benchmark" };
            btnBenchmark.Clicked += BtnBenchmark_Clicked;
            string result = "";

            var stopwatch = new Stopwatch();
            stopwatch.Start();
            int temp = 1;
            for (var i = 0; i < 200000000; i++)
            {
                temp += temp;
            }
            stopwatch.Stop();
            result += "Integer Addition Score (lower is better): " + stopwatch.ElapsedMilliseconds.ToString() + Environment.NewLine;

            stopwatch = new Stopwatch();
            stopwatch.Start();
            var tempd = 1.0d;
            for (double d = 0.0d; d < 200000000.0d; d++)
            {
                temp += temp;
            }
            stopwatch.Stop();
            result += "Double Addition Score (lower is better): " + stopwatch.ElapsedMilliseconds.ToString() + Environment.NewLine;

            stopwatch = new Stopwatch();
            stopwatch.Start();
            for (double d = 0.0d; d < 100000000.0d; d++)
            {
                tempd = Math.Log(d);
            }
            stopwatch.Stop();
            result += "Logarithm Score (lower is better): " + stopwatch.ElapsedMilliseconds.ToString() + Environment.NewLine;

            stopwatch = new Stopwatch();
            stopwatch.Start();
            temp = 1;
            for (var i = 0; i < 200000000; i++)
            {
                temp *= i;
            }
            stopwatch.Stop();
            result += "Integer Multiplication Score (lower is better): " + stopwatch.ElapsedMilliseconds.ToString() + Environment.NewLine;

            stopwatch = new Stopwatch();
            stopwatch.Start();
            temp = int.MaxValue;
            for (var i = 1; i < 200000000; i++)
            {
                var dummy = temp / i;
            }
            stopwatch.Stop();
            result += "Integer Division Score (lower is better): " + stopwatch.ElapsedMilliseconds.ToString() + Environment.NewLine;

            stopwatch = new Stopwatch();
            stopwatch.Start();
            tempd = 1.0d;
            for (var d = 0.0d; d < 200000000.0d; d++)
            {
                tempd *= d;
            }
            stopwatch.Stop();
            result += "Double Multiplication Score (lower is better): " + stopwatch.ElapsedMilliseconds.ToString() + Environment.NewLine;

            stopwatch = new Stopwatch();
            stopwatch.Start();
            tempd = double.MaxValue;
            for (var d = 1.0d; d < 200000000.0d; d++)
            {
                var dummy = tempd / d;
            }
            stopwatch.Stop();
            result += "Double Division Score (lower is better): " + stopwatch.ElapsedMilliseconds.ToString() + Environment.NewLine;
            Content = new StackLayout
            {
                Children =
                {
                    new Label { Text = "Benchmark", FontAttributes = FontAttributes.Bold },
                    new Editor { Text = result},
                    btnBenchmark
                }
            };
        }
    }
}