import random
import json
from sys import stdout
from time import sleep

coords = {
	'latitude' : 0,
	'longitude' : 0
}

while (1):
	coords['latitude'] = random.randint(-90,90)
	coords['longitude'] = random.randint(-180,180)
	json_string = json.dumps(coords)
	print(json_string)
	stdout.flush()
	sleep(1)