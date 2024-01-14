import json
import os


if os.path.exists("seniority.json"):
    os.remove("seniority.json")
file = open("seniority-text.txt", "r+")
lines = file.readlines()

with open("mar-shift-bid.json", "r") as read_file:
	bid = json.load(read_file)

employees = []
leads = []
bid_spot = 0

dict1 = {}


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


for index, i in enumerate(lines):
    sep = i.split("\t")
    sen = int(sep[0].rstrip())
    name2 = sep[1].split(", ")
    first = name2[1].rstrip()
    last = name2[0]
    emp = sep[2].rstrip()
    if('lead' in sep[3].lower()):
        lead = True
    else:
        lead = False
        bid_spot = bid_spot + 1
    #lead = seniority_query(emp)
    

    dict1 = {
        "local-seniority": index +1,
        "first": first,
        "last": last,
        "seniority": sen,
        "bid_spot": bid_spot,
        "employee": emp,
        "lead": lead
    }
    employees.append(dict1)
    
    
with open("seniority.json", "a") as outfile:
    json.dump(employees, outfile, indent=4)

