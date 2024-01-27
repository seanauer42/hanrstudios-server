import json
import os

# show: employee number, last name, first name, schedule, shift name

file = open("shift-bid-final.txt", "r+")
lines = file.readlines()

with open("jan24-bid.json", "r+") as read_file:
	bid = json.load(read_file)

employees = []

dict1 = {}
mech = ""
location = ""
title = ""


def seniority_query(emp):
    for keyval in bid:
        if emp in keyval['mechanics']:
            print("\n" + emp + " not a lead")
            return False
        else:
            continue
            
    print("\n" + emp + " is a lead")
    leads.append(emp)
    return True
    

def set_location(loc):
    match loc:
        case "3D":
            return "DAYS"
        case "5S":
            return "SWINGS"
        case _:
            return "CREW " + loc + " MIDS"
            

def put_employee(m, t, l):
    
    for index, line in enumerate(bid):
        
        bid_title = line['title']
        bid_loc = line['location']
        bid_mec = line['mechanics']
        
        if(bid_title == t and bid_loc == l):
            bid_mec.append(m)
            print("added:", "title:", bid_title, "location:", bid_loc, "mechs:", bid_mec)
            
    
#This will work if you show employee number, last, first, schedule, and shift name
#emp, last, first, shift, location
#be sure to sort by seniority
for index, line in enumerate(lines):
    i = line[:-1]
    print(index, line)
    try:
        num = int(line)
        if(num > 5000):
            mech = str(num)
            
        else:
            print(set_location(i))
            
    except: 
        if("DAYS" in line or "SWINGS" in line or "MIDS" in line):
            location = line[:-1]
            print("loc:", location)   
        elif("-" in line):
            
            title = line.split()[0]
            
        else:
            print("exception", line)
            
    finally:
        if(location != ""):
            print(index, mech, title, location)
            print("done")
            
            put_employee(mech, title, location)
            
            mech = ""
            location = ""
            title = ""


#replace old bid json file with new file
if os.path.exists("jan24-bid.json"):
    os.remove("jan24-bid.json")
with open("jan24-bid.json", "a") as outfile:
    json.dump(bid, outfile, indent=4)
