# Sammy Pettinichi
# Python Socket Client
# Sends to NodeJS server to control OpenLayers Overlay

import socket
import sys
import fileinput
import random

#set server host and port number
server_host = "127.0.0.1"
server_port = 3001

#arrange coordinates into proper format then send to server
def sendMessage(sock,latitude, longitude):
	coords = "[" + latitude + "," + longitude + "]"
	sock.sendall(coords)

#set up socket to connect to designated host
sock = socket.socket(sock.AF_INET,socket.SOCK_STREAM)
sock.connect((server_host,server_port))

#asks user if they'd like to manually enter coordinates or autorun
print("Choose from the following options:")
print("1) Manually enter coordinates")
print("2) Run simulation")
choice = sys.stdin

#if user wants to enter coordinates
if choice == 1:
	if len(sys.argv) == 3:
		latitude = sys.argv[1]
		longitude = sys.argv[2]
	else
		print("latitude: ",end="")
		server_host = sys.stdin
		print("longitude: ",end="")
		server_host = sys.stdin
		
		sendMessage(sock,latitude,longitude)
#if user wants coordinates to be auto generated
else
	for num in range(1,10)
		input("Press Enter to generate coordinates")	#waits for user to continue so they can see overlay movement
		latitude = random.randint(-90,90)
		longitude = random.randint(-180,180)
		sendMessage(sock,latitude,longitude)

sock.shutdown*(socket.SHUT_RDWR)
sock.close()