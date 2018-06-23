# -*- coding: utf-8 -*-
"""
Created on Tue Jun 19 13:46:47 2018

@author: aga
"""

import json
from openpyxl import load_workbook

wb = load_workbook(filename = 'Omaha System 三大表格.xlsx', data_only=True)
sheet = wb["42項問題表"]

result = {"D1":{},"D2":{},"D3":{},"D4":{}}

for row in sheet.rows:
    if not row[0].value:
        continue
    
    v = row[0].value.split(".")
    if len(v) < 2:    #skip first row
        continue
    
    domain = v[0]
    name = v[1]
    if "name" not in result[domain]:
        result[domain]["name"] = name
    if "problem" not in result[domain]:
        result[domain]["problem"] = []
    
    v = row[1].value.split(".")
    pID = int(v[0])
    cht = v[1]
    eng = row[3].value
    problem = {"id":pID, "cht":cht, "eng":eng, "sign": []}
    result[domain]["problem"].append(problem)
    
sheet = wb["問題與徵兆對照表"]
for row in sheet.rows:
    domain = row[1].value
    if domain not in result:    #skip first row
        continue
    
    pID = int(row[2].value)-1
    sID = int(row[3].value)
    sign = {"id":sID, "cht": row[5].value, "eng": row[4].value}
    result[domain]["problem"][pID]["sign"].append(sign)
    
with open('omaha.json', 'w', encoding="utf8") as outfile:
    json.dump(result, outfile, ensure_ascii=False)