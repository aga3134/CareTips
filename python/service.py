# -*- coding: utf-8 -*-
"""
Created on Thu Jun  7 11:25:52 2018

@author: aga
"""
import json

file = json.loads(open("service-codes-180420.json", encoding="utf8").read())
service = file["serviceMap"]

serviceArr = {}
for key in service:
    category = key[0:2]
    obj = {}
    obj["code"] = key
    obj["name"] = service[key]["serviceType"]
    obj["price"] = service[key]["price"]
    obj["priceRemote"] = service[key]["priceRemote"]
    if not category in serviceArr:
        serviceArr[category] = []
    serviceArr[category].append(obj)
    
for category in serviceArr:
    print(serviceArr[category])
    print("\n")