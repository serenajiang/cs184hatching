#
#  Makefile
#

CC := g++

OBJS := main.o

TAR := mipmap

OFLAG := -O2
LIB := /usr/local/lib:/opt/opencv/3rdparty/include/opencl/1.2/CL
#INC := /usr/local/include:.:/opt/opencv/3rdparty/include/opencl/1.2/:/opt/intel/opencl/include/
INC := /opt/opencv/3rdparty/include/opencl/1.2/


CFLAGS := -pipe -g -Wall -I$(INC) -O2 -std=c++11 `pkg-config --cflags opencv`
LDFLAGS := -Wall -g -O2 -I$(INC) -L$(LIB) -lpthread `pkg-config --libs opencv` -lOpenCL

all:$(TAR)

$(TAR): $(OBJS)
	$(CC) $(OBJS) $(LDFLAGS)  -o $@

%.o:%.cpp
	$(CC) $(CFLAGS) -c $<  -o $@

clean:
	rm -f *.o
	rm -f $(TAR)
