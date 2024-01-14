import json
import os
import string

# show SHIFT, NAME, MAX CREW

if os.path.exists("jan24-bid.json"):
    os.remove("jan24-bid.json")
file = open("jan24-bid-text.txt", "r+")
lines = file.readlines()

shifts = []
dict = {}

location = ""
title = ""
spots = 0
time = ""
mechanics = []
i = 0

for index, line in enumerate(lines):
    print("index:", index)

    if i == 0:
        sep = line.split()
        title = sep[0]
        time = sep[1]
        print("title:", title, "time:", time)
        i = i+1
        print(i)
        continue
    if i == 1:
        location = line[:-1]
        print("location:", location)
        i = i+1
        print(i)
        continue
    if i == 2:
        spots = int(line.strip(string.ascii_letters))
        dict = {
            "index": int((index+1) / 3),
            "title": title,
            "location": location,
            "spots": spots,
            "time": time,
            "mechanics": []
        }
        shifts.append(dict)
        print(shifts)
        i = 0
        print(i)
        continue



with open("jan24-bid.json", "a") as outfile:
    json.dump(shifts, outfile, indent=4)
