#include <iostream>
#include <opencv2/opencv.hpp>

using namespace cv;

int main() {

  Mat origin = imread("../Textures/test.png");
  imshow("origin", origin);

  Mat result = Mat(origin.rows * 2, origin.cols * 2, CV_64F);




  waitKey(0);
}