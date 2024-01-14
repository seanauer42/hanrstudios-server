import json

shift_preference = ["days", "swings", "nights"]
day_off_preference = ["sun","mon", "tue", "wed", "thu", "fri", "sat"]
four_days_preference = True


with open("seniority.json", "r") as read_file:
    data = json.load(read_file)
    
def search(num):
    for keyval in data:
        if num == keyval['employee']:
            return keyval

def bid_spot(num):
    bids = 1
    for keyval in data:
        if num == keyval['employee']:
            return bids 
        if keyval["lead"] == True:
            continue
        else:
            bids += 1

# start script
emp_num = input(str("What's your employee number?  "))
me = search(emp_num)
my_bid_spot = bid_spot(me['employee'])
print("Hello, " + me["first"] + ". Your bid spot is " + str(my_bid_spot))
pref1 = input(str("What is your first preference?"))
