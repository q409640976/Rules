import os
import re

with open('QuantumultX/Advertising.conf', 'r') as r:
    rules = r.readlines()

hostnames = 'hostname = '

for rule in rules:
    matched = re.match(r'# > [\w\-\ ]+? - ([\w,\*\.]+)', rule)
    if matched:
        name = matched.group(1).split(',')
        for hostname in name:
            if hostname not in hostnames:
                hostnames += hostname.strip() + ', '

with open('QuantumultX/Advertising.conf', 'r+') as f:
    f.write(hostnames.rstrip(', '))