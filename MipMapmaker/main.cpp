#include <iostream>
#include <opencv2/opencv.hpp>

using namespace cv;

int main() {

  string folderstring;
  do {
    std::cout << "Folder name: ";
    std::getline(std::cin, folderstring);
    if (folderstring.size() == 0) {
      break;
    }

    char foldername[folderstring.size() + 1];
    strcpy(foldername, folderstring.c_str());

    for (int i = 0; i < 6; i++) {
      char file[100];
      sprintf(file, "../Textures/%s/lvl%d.png", foldername, i);
      std::cout << "reading in: " << file << "\n";
      Mat origin = imread(file);

      imshow("origin", origin);

      int start_size = origin.rows;
      int size = start_size;
      int level = 1;

      do {
        int offset = (start_size - size) / 2;

        Rect roi;
        roi.x = offset;
        roi.y = offset;
        roi.width = size;
        roi.height = size;

        Mat nextLevel = origin(roi);

        char filename[100];

        sprintf(filename, "../Textures/%s/mipmaps/tone_%d_level_%d.png", foldername, i, level);
        cv::imwrite(filename, nextLevel);

        size /= 2;
        level += 1;
      } while (size != 1);
    }
  } while (folderstring.size() != 0);

  return 0;
}